
# Sample Express application with Prometheus/Grafana monitoring

This project contains a 'Hello world!' Express application.

Some Node.js metrics are exposed with Prometheus (on the `/metrics` route)

A custom metric (`number_default_connection`) is also available. It's a counter that increments each time a connection is made to the default route.

## Instructions

Build and run the stack:

```bash
docker-compose up
```

## Usage


- HTTP GET on default route: `curl localhost:3000`
- Manually GET prometheus metrics exposed by the express applcation: `curl localhost:3000/metrics`
- Connect to prometheus UI: `localhost:9091`
  - Check that the express app is registered in the Targets
  - Have a look at the value available
    - `number_default_connection` is a simple counter that increments each time you connect to the default route
- Connect to grafana: `localhost:3001`. Credentials are admin/admin.
  - Add `prometheus:9090` as a Data Source in the UI
  - Create a dashboard using this datasource and the `number_default_connection` metrics that will show the number of connections over time.
