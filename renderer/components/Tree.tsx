import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import FolderSharpIcon from '@material-ui/icons/FolderSharp';
import FolderOpenSharpIcon from '@material-ui/icons/FolderOpenSharp';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 1000,
    maxWidth: 240,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
  },
});

export interface TreeItemData {
  id: string;
  name: string;
  children: TreeItemData[];
}

interface DataTreeViewProps {
  treeItems: TreeItemData[];
}

const getTreeItemsFromData = (treeItems: TreeItemData[]) => {
  return treeItems.map((treeItemData) => {
    let children = undefined;
    if (treeItemData.children && treeItemData.children.length > 0) {
      children = getTreeItemsFromData(treeItemData.children);
    }
    return (
      <TreeItem
        key={treeItemData.id}
        nodeId={treeItemData.id}
        label={treeItemData.name}
        children={children}
        expandIcon={<FolderSharpIcon />}
        collapseIcon={<FolderOpenSharpIcon />}
        endIcon={<DescriptionSharpIcon />}
      />
    );
  });
};

const FileSystemNavigator = ({ treeItems }: DataTreeViewProps) => {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
    >
      {getTreeItemsFromData(treeItems)}
    </TreeView>
  );
};

export default FileSystemNavigator;
