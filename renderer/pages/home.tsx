import React from 'react';
import FileSystemNavigator from '../components/Tree';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { uuid } from 'uuidv4';
import { TreeItemData } from '../components/Tree';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const sample: TreeItemData[] = [
  {
    id: uuid(),
    name: 'English',
    children: [
      {
        id: uuid(),
        name: 'Spring',
        children: [],
      },
    ],
  },
  {
    id: uuid(),
    name: 'Italian',
    children: [
      {
        id: uuid(),
        name: 'Level A',
        children: [
          {
            id: uuid(),
            name: 'LevelB',
            children: [],
          },
        ],
      },
    ],
  },
];
const Home = () => {
  if (typeof window !== 'undefined') {
    const AceEditor = require('react-ace').default;
    require('ace-builds/src-noconflict/mode-javascript');
    require('ace-builds/src-noconflict/theme-monokai');
    require('ace-builds/src-noconflict/ext-language_tools');
    return (
      <React.Fragment>
        <Box display="flex" justifyContent="flex-end">
          <Box
            maxWidth="240px"
            width="100%"
            display="flex"
            flexDirection="column"
            position="fixed"
            top="0"
            left="0"
          >
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              width="100%"
              height="60px"
              borderBottom="1px solid black"
            >
              <IconButton>
                <CreateNewFolderIcon />
              </IconButton>
              <IconButton>
                <InsertDriveFileIcon />
              </IconButton>
              <IconButton>
                <DeleteForeverIcon />
              </IconButton>
            </Box>
            <FileSystemNavigator treeItems={sample} />
          </Box>
          <AceEditor
            mode="javascript"
            theme="monokai"
            // onChange={onChange}
            value="console.log()"
            fontSize="16px"
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            height="1000px"
            width="960px"
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
            }}
          />
        </Box>
      </React.Fragment>
    );
  }
  return null;
};

export default Home;
