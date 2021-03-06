import React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'
import ColumnDefinition from './ColumnDefinition.js'

export class ColumnDefinitionManager extends React.Component {

  render() {
    const columnDefinitions = this.props.columnDefinitions.map((columnDefinition) => (
      <ColumnDefinition key={columnDefinition.columnKey} columnDefinition={columnDefinition} onColumnDefinitionChange={this.props.onColumnDefinitionChange}/>
    ));

    return (
      <div className={classnames(styles.columnDefinitionManager)}>
        {columnDefinitions}
      </div>
    )
  }
}

ColumnDefinitionManager.propTypes = {
  columnDefinitions: React.PropTypes.array,
  onColumnDefinitionChange: React.PropTypes.func.isRequired
};

export default ColumnDefinitionManager