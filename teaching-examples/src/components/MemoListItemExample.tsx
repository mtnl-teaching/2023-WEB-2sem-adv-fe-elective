import { memo } from "react";

export interface MemoListItemExampleProps {
  item: any;
}

const MemoListItemExample = memo(function MemoListItemExample({
  item,
}: MemoListItemExampleProps) {
  return <></>;
});

export default MemoListItemExample;
