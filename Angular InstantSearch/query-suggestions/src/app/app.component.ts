import { Component } from '@angular/core';
import * as algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public configSuggestions = {
    indexName: 'instant_search_demo_query_suggestions',
    searchClient,
  };
  public configResults = {
    indexName: 'instant_search',
    searchClient,
  };

  public searchParameters = { query: '' };

  setQuery(query : string) {
    this.searchParameters.query = query
  }
}
