# Nodon Coding Challenge

## Requirements

Design an API endpoint that provides autocomplete suggestions for large cities.
The suggestions should be restricted to cities in the USA and Canada with a population above 5000 people.

- use this repo as foundation but feel free to change anything
- the endpoint is exposed at `/suggestions`
- the partial (or complete) search term is passed as a query string parameter `q`
- the caller's location can optionally be supplied via query string parameters `latitude` and `longitude` to help improve relative scores
- the endpoint returns a JSON response with an array of scored suggested matches
  - the suggestions are sorted by descending score
  - each suggestion has a score between 0 and 1 (inclusive) indicating confidence in the suggestion (1 is most confident)
  - each suggestion has a name which can be used to disambiguate between similarly named locations
  - each suggestion has a latitude and longitude
- all functional tests should pass (additional tests may be implemented as necessary).
- the final application should be deployed to any host like [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs).
- feel free to add more features if you like!

#### Sample responses

These responses are meant to provide guidance. The exact values can vary based on the data source and scoring algorithm.

**Near match**

    GET /suggestions?q=Londo&latitude=43.70011&longitude=-79.4163

```json
{
  "suggestions": [
    {
      "name": "London, ON, Canada",
      "latitude": "42.98339",
      "longitude": "-81.23304",
      "score": 0.9
    },
    {
      "name": "London, OH, USA",
      "latitude": "39.88645",
      "longitude": "-83.44825",
      "score": 0.5
    },
    {
      "name": "London, KY, USA",
      "latitude": "37.12898",
      "longitude": "-84.08326",
      "score": 0.5
    },
    {
      "name": "Londontowne, MD, USA",
      "latitude": "38.93345",
      "longitude": "-76.54941",
      "score": 0.3
    }
  ]
}
```

**No match**

    GET /suggestions?q=SomeRandomCityInTheMiddleOfNowhere

```json
{
  "suggestions": []
}
```

### Non-functional

- All code should be written in Typescript.
- Mitigations to handle high levels of traffic should be implemented.
- Code test can be submitted by mailing a link to a public repo or a .zip to your Nodon contact.
- The email should contain a link to the deployed service.
- Documentation and maintainability is a plus.
- Any kind of third party dependencies may be used.
- Feel free to replace current testing & server setup to something of your preference.

## Dataset

You can find the necessary dataset along with its description and documentation in the [`data`](data/) directory.

## Evaluation

We will use the following criteria to evaluate your solution:

- Capacity to follow instructions
- Developer Experience (how easy it is to run your solution locally, how clear your documentation is, etc)
- Solution correctness
- Performance
- Tests (quality and coverage). Some tests are already included and not working, these should be made pass by fixing code or changing the test.
- Code style and cleanliness
- Attention to detail
- Ability to make sensible assumptions

It is ok to ask us questions!

We know that the time for this project is limited and it is hard to create a "perfect" solution, so we will consider that along with your experience when evaluating the submission.

## Getting Started

### Setting up your environment

1. Install [Node.js v14+](http://www.nodejs.org).

### Setting up the project

In the project directory run:

```
npm ci
```

### Running the tests

The test suite can be run with:

```
npm run test
```

### Starting the application

To start a local server run:

```
npm run start
```

it should produce an output similar to:

```
Server running at http://localhost:2345/suggestions
```
