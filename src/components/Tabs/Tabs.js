import React from "react";
import TabButtons from "./TabButtons";

class Tabs extends React.Component {
  state = {
    activeTab: 0,
  };

  changeTab = (tabIndex) => {
    this.setState({ activeTab: tabIndex });
  };

  render() {
    let content;
    let buttons = [];
    return (
      <div style={{ flex: 1, maxWidth: "100%" }}>
        {React.Children.map(this.props.children, (child, childIndex) => {
          buttons.push(child.props.label);
          if (childIndex === this.state.activeTab)
            content = child.props.children;
        })}
        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
          onClick={this.props.onClick}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

export default Tabs;