import { Comments } from "../../types";
type RepliesCommentsState = {
    comments: Comments;
    addCommentsToStoreOrUpdateComments: Function;
};
declare const repliesCommentsStore: import("zustand").UseBoundStore<import("zustand").StoreApi<RepliesCommentsState>>;
export default repliesCommentsStore;
