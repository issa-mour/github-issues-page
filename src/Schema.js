import { schema } from 'normalizr';

const issue = new schema.Entity('issues');
const issuesSchema = [issue];

export { issuesSchema };