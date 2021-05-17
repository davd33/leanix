import { GET_GITHUB_LIST, GithubListAction } from './github-list.actions';

export function reducer(
    state: any,
    action: GithubListAction): any {

    switch (action.type) {
        case GET_GITHUB_LIST: {
            console.log(`REDUCER ${GET_GITHUB_LIST}`);
            return { repositories: ['hello', 'world'] };
        }
        default: {
            return { ...state };
        }
    }
}
