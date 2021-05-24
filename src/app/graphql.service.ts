import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export function gql(stringPieces: TemplateStringsArray): string {
  return stringPieces.join('');
}

@Injectable({providedIn: "root"})
export class GraphQLService {
  constructor(readonly http: HttpClient) {}

  fetch(query: string, token: string, variables: object = {}) {
    return this.http.post('https://api.github.com/graphql', {
      query, variables
    }, {
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
  }
}
