
const express = require("express");
const promBundle = require("express-prom-bundle");
const client = require('prom-client');

const app = express()
const port = 3000

const metricsMiddleware = promBundle({
  includeMethod: true, 
  includePath: true, 
  includeStatusCode: true, 
  includeUp: true,
  customLabels: {project_name: 'hello_world', project_type: 'test_metrics_labels'},
  promClient: {
      collectDefaultMetrics: {
      }
    }
});

app.use(metricsMiddleware);

const counter = new client.Counter({
  name: 'number_default_connection',
  help: 'Counter that increments each time a connection is made to to the default route',
});

app.get('/', (req, res) => {
  res.send('Hello World!')
  counter.inc(1)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})