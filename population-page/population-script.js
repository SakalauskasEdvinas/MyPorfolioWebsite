import * as d3 from "d3";
console.log(d3)
const margin = { top: 20, right: 20, bottom: 60, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// Create the SVG container once, outside the updateChart function
const svg = d3.select('#chart')
  .append('svg')
  .attr('width', '100%')
  .attr('height', '100%')
  .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
  .attr('preserveAspectRatio', 'xMidYMid meet')
  .append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);

function updateChart(filterBy) {
  // Fetch data from REST Countries API
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
      let sortedCountries;

      // Sort countries based on the filterBy option
      if (filterBy === 'population') {
        document.querySelector('#filter-text').innerHTML = "population"
        sortedCountries = countries.sort((a, b) => b.population - a.population);
      } else if (filterBy === 'area') {
        document.querySelector('#filter-text').innerHTML = "area"

        sortedCountries = countries.sort((a, b) => b.area - a.area);
      }
      
      const topCountries = sortedCountries.slice(0, 10);
      const data = topCountries.map(country => ({
        country: country.name.common,
        value: filterBy === 'population'
          ? country.population / 1000000
          : filterBy === 'area'
          ? country.area : 0
          
          
      }));
      
      // Create scales and axes for the chart
      const x = d3.scaleBand()
        .domain(data.map(d => d.country))
        .range([0, width])
        .padding(0.2);

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([height, 0]);

      // Bind the data to the bars and update the chart
      const bars = svg.selectAll('.bar')
        .data(data);

      bars.enter()
        .append('rect')
        .attr('class', 'bar')
        .merge(bars)
        .attr('x', d => x(d.country))
        .attr('width', x.bandwidth())
        .attr('y', d => y(d.value))
        .attr('height', d => height - y(d.value))
        .attr('fill', 'steelblue');

      bars.exit().remove();

      // Update the axes
      svg.selectAll('g.x-axis').remove();
      svg.selectAll('g.y-axis').remove();

      svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)');

        svg.append('g')
          .attr('class', 'y-axis')
          .call(d3.axisLeft(y));
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }
  
  // Add an event listener for the dropdown menu
  document.getElementById('filter').addEventListener('change', event => {
      const filterBy = event.target.value;
      updateChart(filterBy);
    });
  
  // Call the updateChart function on page load with the default filter option
  updateChart('population');
