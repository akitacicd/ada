interface IEventArgs {
    'branches'?: string[] | string;
    'branches-ignore'?: string[] | string;
    'paths-ignore'?: string[] | string;
    paths?: string[] | string;
    tags?: string[] | string;
}
declare type BranchProtectionRuleTypes = 'created' | 'edited' | 'deleted';
interface IBranchProtectionRuleArgs extends IEventArgs {
    types?: BranchProtectionRuleTypes[] | BranchProtectionRuleTypes;
}
export interface IBranchProtectionRule {
    'branch_protection_rule': IBranchProtectionRuleArgs;
}
declare type ICheckRunTypes = 'created' | 'rerequested' | 'completed' | 'requested_action';
interface ICheckRunArgs extends IEventArgs {
    types?: ICheckRunTypes[] | ICheckRunTypes;
}
export interface ICheckRun {
    'check_run': ICheckRunArgs;
}
declare type ICheckSuiteTypes = 'completed';
interface ICheckSuiteArgs extends IEventArgs {
    types?: ICheckSuiteTypes[] | ICheckSuiteTypes;
}
export interface ICheckSuite {
    'check_suite': ICheckSuiteArgs;
}
export interface ICreate {
    'create': IEventArgs;
}
export interface IDelete {
    'delete': IEventArgs;
}
export interface IDeployment {
    'deployment': IEventArgs;
}
export interface IDeploymentStatus {
    'deployment_status': IEventArgs;
}
declare type IDiscussionTypes = 'created' | 'edited' | 'deleted' | 'transferred' | 'pinned' | 'unpinned' | 'labeled' | 'unlabeled' | 'locked' | 'unlocked' | 'category_changed' | 'answered' | 'unanswered	';
interface IDiscussionArgs extends IEventArgs {
    types?: IDiscussionTypes[] | IDiscussionTypes;
}
export interface IDiscussion {
    'discussion': IDiscussionArgs;
}
declare type IDiscussionCommentTypes = 'created' | 'edited' | 'deleted';
interface IDiscussionCommentArgs extends IEventArgs {
    types?: IDiscussionCommentTypes[] | IDiscussionCommentTypes;
}
export interface IDiscussionComment {
    'discussion_comment': IDiscussionCommentArgs;
}
export interface IFork {
    'fork': IEventArgs;
}
export interface IGollum {
    'gollum': IEventArgs;
}
declare type IIssueCommentTypes = 'created' | 'edited' | 'deleted';
interface IIssueCommentArgs extends IEventArgs {
    types?: IIssueCommentTypes[] | IIssueCommentTypes;
}
export interface IIssueComment {
    'issue_comment': IIssueCommentArgs;
}
declare type IIssueTypes = 'opened' | 'edited' | 'deleted' | 'transferred' | 'pinned' | 'unpinned' | 'closed' | 'reopened' | 'assigned' | 'unassigned' | 'labeled' | 'unlabeled' | 'locked' | 'unlocked' | 'milestoned' | 'demilestoned';
interface IIssueArgs extends IEventArgs {
    types?: IIssueTypes[] | IIssueTypes;
}
export interface IIssue {
    'issue': IIssueArgs;
}
declare type ILabelTypes = 'created' | 'edited' | 'deleted';
interface ILabelArgs extends IEventArgs {
    types?: ILabelTypes[] | ILabelTypes;
}
export interface ILabel {
    'label': ILabelArgs;
}
declare type IMilestoneTypes = 'created' | 'closed' | 'opened' | 'edited' | 'deleted';
interface IMilestoneArgs extends IEventArgs {
    types?: IMilestoneTypes[] | IMilestoneTypes;
}
export interface IMilestone {
    'milestone': IMilestoneArgs;
}
export interface IPageBuild {
    'page_build': IEventArgs;
}
declare type IProjectTypes = 'created' | 'closed' | 'reopened' | 'edited' | 'deleted';
interface IProjectArgs extends IEventArgs {
    types?: IProjectTypes[] | IProjectTypes;
}
export interface IProject {
    'project': IProjectArgs;
}
declare type IProjectCardTypes = 'created' | 'moved' | 'converted' | 'edited' | 'deleted';
interface IProjectCardArgs extends IEventArgs {
    types?: IProjectCardTypes[] | IProjectCardTypes;
}
export interface IProjectCard {
    'project_card': IProjectCardArgs;
}
declare type IProjectColumnTypes = 'created' | 'updated' | 'moved' | 'deleted';
interface IProjectColumnArgs extends IEventArgs {
    types?: IProjectColumnTypes[] | IProjectColumnTypes;
}
export interface IProjectColumn {
    'project_column': IProjectColumnArgs;
}
export interface IPublic {
    'public': IEventArgs;
}
declare type IPullRequestTypes = 'assigned' | 'unassigned' | 'labeled' | 'unlabeled' | 'opened' | 'edited' | 'closed' | 'reopened' | 'synchronize' | 'converted_to_draft' | 'ready_for_review' | 'locked' | 'unlocked' | 'review_requested' | 'review_request_removed' | 'auto_merge_enabled' | 'auto_merge_disabled';
interface IPullRequestArgs extends IEventArgs {
    types?: IPullRequestTypes[] | IPullRequestTypes;
}
export interface IPullRequest {
    'pull_request': IPullRequestArgs;
}
declare type IPullRequestReviewTypes = 'submitted' | 'edited' | 'dismissed';
interface IPullRequestReviewArgs extends IEventArgs {
    types?: IPullRequestReviewTypes[] | IPullRequestReviewTypes;
}
export interface IPullRequestReview {
    'pull_request_review': IPullRequestReviewArgs;
}
declare type IPullRequestReviewCommentTypes = 'submitted' | 'edited' | 'dismissed';
interface IPullRequestReviewCommentArgs extends IEventArgs {
    types?: IPullRequestReviewCommentTypes[] | IPullRequestReviewCommentTypes;
}
export interface IPullRequestReviewComment {
    'pull_request_review_comment': IPullRequestReviewCommentArgs;
}
declare type IPullRequestTargetTypes = 'assigned' | 'unassigned' | 'labeled' | 'unlabeled' | 'opened' | 'edited' | 'closed' | 'reopened' | 'synchronize' | 'converted_to_draft' | 'ready_for_review' | 'locked' | 'unlocked' | 'review_requested' | 'review_request_removed' | 'auto_merge_enabled' | 'auto_merge_disabled';
interface IPullRequestTargetArgs extends IEventArgs {
    types?: IPullRequestTargetTypes[] | IPullRequestTargetTypes;
}
export interface IPullRequestTarget {
    'pull_request_target': IPullRequestTargetArgs;
}
export interface IPush {
    'push': IEventArgs;
}
declare type IRegistryPackageTypes = 'published' | 'updated';
interface IRegistryPackageArgs extends IEventArgs {
    types?: IRegistryPackageTypes[] | IRegistryPackageTypes;
}
export interface IRegistryPackage {
    'registry_package': IRegistryPackageArgs;
}
declare type IReleaseTypes = 'published' | 'updated';
interface IReleaseArgs extends IEventArgs {
    types?: IReleaseTypes[] | IReleaseTypes;
}
export interface IRelease {
    'release': IReleaseArgs;
}
interface IRepositoryDispatchArgs extends IEventArgs {
    types?: string[] | string;
}
export interface IRepositoryDispatch {
    'repository_dispatch': IRepositoryDispatchArgs;
}
interface IScheduleArgs {
    cron?: string;
}
export interface ISchedule {
    'schedule': IScheduleArgs[];
}
export interface IStatus {
    'status': IEventArgs;
}
declare type IWatchTypes = 'started';
interface IWatchArgs extends IEventArgs {
    types?: IWatchTypes[] | IWatchTypes;
}
export interface IWatch {
    'watch': IWatchArgs;
}
interface IWorkflowCallInput {
    [key: string]: {
        required: boolean;
        type: 'string' | 'boolean' | 'number';
        default?: string | boolean | number;
        description?: string;
    };
}
interface IWorkflowCallSecret {
    [key: string]: {
        required: boolean;
        description?: string;
    };
}
interface IWorkflowCallArgs extends IEventArgs {
    inputs?: IWorkflowCallInput;
    secrets?: IWorkflowCallSecret;
}
export interface IWorkflowCall {
    'workflow_call': IWorkflowCallArgs;
}
interface IWorkflowDispatchInput {
    [key: string]: {
        required: boolean;
        type: 'string' | 'boolean' | 'number';
        default?: string | boolean | number;
        description?: string;
    };
}
interface IWorkflowDispatchSecret {
    [key: string]: {
        required: boolean;
        description?: string;
    };
}
interface IWorkflowDispatchArgs extends IEventArgs {
    inputs?: IWorkflowDispatchInput;
    secrets?: IWorkflowDispatchSecret;
}
export interface IWorkflowDispatch {
    'workflow_dispatch': IWorkflowDispatchArgs;
}
declare type IWorkflowRunTypes = 'completed' | 'requested';
interface IWorkflowRunArgs extends IEventArgs {
    workflows: string[];
    types: IWorkflowRunTypes[] | IWorkflowRunTypes;
}
export interface IWorkflowRun {
    'workflow_run': IWorkflowRunArgs;
}
export declare type IEvents = IBranchProtectionRule | ICheckRun | ICheckSuite | ICreate | IDelete | IDeployment | IDeploymentStatus | IDiscussion | IDiscussionComment | IFork | IGollum | IIssueComment | IIssue | ILabel | IMilestone | IPageBuild | IProject | IProjectCard | IProjectColumn | IPublic | IPullRequest | IPullRequestReview | IPullRequestReviewComment | IPullRequestTarget | IPush | IRegistryPackage | IRelease | IRepositoryDispatch | ISchedule | IStatus | IWatch | IWorkflowCall | IWorkflowDispatch | IWorkflowRun;
export {};
