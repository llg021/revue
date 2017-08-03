import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IssueReport from '../IssueReport';

storiesOf('IssueReport', module)
  .add('Default', () => (
  	<IssueReport />
  ))
  .add('Items', () => {
  	const colItems = [
		{value: "Patient ID"},
		{value: "Date of Birth"},
		{value: "Temperature"},
		{value: "Heart Rate"},
		{value: "Blood Pressure"}
	];
	const issueItems = [
		{value: "Missing value"},
		{value: "Implausible numerical value"},
		{value: "Date time inconsistency"},
		{value: "Illegal vocabulary"},
		{value: "Future event"}
	];
    return (
    	<IssueReport colItems={colItems} issueItems={issueItems} />
    );
  })