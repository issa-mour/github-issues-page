import { schema } from 'normalizr';

const issue = new schema.Entity('issues');
const issuesSchema = [issue];

const comment = new schema.Entity('comments');
const commentsSchema = [comment];

export { issuesSchema, commentsSchema };