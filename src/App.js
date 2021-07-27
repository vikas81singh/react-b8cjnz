import React from 'react';
import './style.css';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import BreadCrumb from '@salesforce/design-system-react/components/breadcrumb';

class App extends React.Component {
  static displayName = 'BreadCrumbExample';
  render() {
    const trail = [
      <a id="parent-entity" href="#entity">
        Parent Entity
      </a>,
      <a href="#record">Parent Record Name</a>
    ];

    return (
      <IconSettings iconPath="/assets/icons">
        <BreadCrumb
          assistiveText={{ label: 'Two item breadcrumb' }}
          trail={trail}
        />
      </IconSettings>
    );
  }
}
