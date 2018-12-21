import Repository from '../models/Repository';

export default interface SearchRepositoriesResponse {
  incomplete_results: boolean;
  items: Repository[];
  total_count: number;
}
