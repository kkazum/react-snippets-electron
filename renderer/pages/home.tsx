import React from 'react';
import FileSystemNavigator from '../components/Tree';
import { Box } from '@material-ui/core';
import { uuid } from 'uuidv4';
import { TreeItemData } from '../components/Tree';
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
          <FileSystemNavigator treeItems={sample} />
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
