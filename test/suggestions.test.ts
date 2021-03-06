import server from '../src/server';
import { expect } from 'chai';
import { describe } from 'mocha';
import Supertest from 'supertest';

const request = Supertest.agent(server);
describe('GET non-existent route', () => {
  let response: Supertest.Response;

  before((done) => {
    request.get('/abc').end((err, res) => {
      response = res;
      done(err);
    });
  });

  it('returns a 404', () => {
    expect(response.statusCode).to.equal(404);
  });
});

describe('GET /suggestions', () => {
  describe('with a non-existent city', () => {
    let response: Supertest.Response;
    let json: any;

    before((done) => {
      request
        .get('/suggestions?q=SomeRandomCityInTheMiddleOfNowhere')
        .end((err, res) => {
          response = res;
          json = JSON.parse(res.text);
          done(err);
        });
    });

    it('returns a 404', () => {
      expect(response.statusCode).to.equal(404);
    });

    it('returns an empty array of suggestions', () => {
      expect(json.suggestions).to.be.instanceof(Array);
      expect(json.suggestions).to.have.length(0);
    });
  });

  describe('with a valid city', () => {
    let response: Supertest.Response;
    let json: any;

    before((done) => {
      request.get('/suggestions?q=Montreal').end((err, res) => {
        response = res;
        json = JSON.parse(res.text);
        done(err);
      });
    });

    it('returns a 200', () => {
      expect(response.statusCode).to.equal(200);
    });

    it('returns an array of suggestions', () => {
      expect(json.suggestions).to.be.instanceof(Array);
      expect(json.suggestions).to.have.length.above(0);
    });

    it('contains a match with name montreal', () => {
      expect(json.suggestions).to.satisfy(
        (suggestions: any) =>
          Array.isArray(suggestions) &&
          suggestions.some((suggestion) => suggestion.name.test(/montreal/i)),
      );
    });

    describe('Validate the shape of the data being returned', () => {
      it('contains latitudes and longitudes', () => {
        expect(json.suggestions).to.satisfy(
          (suggestions: any) =>
            Array.isArray(suggestions) &&
            suggestions.length &&
            suggestions.every(
              (suggestion) => suggestion.latitude && suggestion.longitude,
            ),
        );
      });

      it('contains scores', () => {
        expect(json.suggestions).to.satisfy(
          (suggestions: any) =>
            Array.isArray(suggestions) &&
            suggestions.length &&
            suggestions.every(
              (suggestion) => suggestion.latitude && suggestion.longitude,
            ),
        );
      });
    });

    // Remove this
    it('is a gratuitously failing test you should remove to prove you ran the tests', () => {
      expect(true).to.equal(false);
    });
  });
});
