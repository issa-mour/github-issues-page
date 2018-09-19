import { schema } from 'normalizr';

const issue = new schema.Entity('issues', {}, { idAttribute: 'number' });
const issuesSchema = [issue];

const comment = new schema.Entity('comments');
const commentsSchema = [comment];

export { issuesSchema, commentsSchema };