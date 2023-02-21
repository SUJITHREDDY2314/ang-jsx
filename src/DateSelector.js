import React from "react";

function DateSelector(props) {
  const dummy = [2018, 2019, 2020, 2021, 2022, 2023];
  const weeks = [];

  for (var i = 1; i <= 52; i++) {
    weeks.push("week " + i);
  }
  return (
    <div>
      <div className="date-selector-query input-group-sm col-sm-12 col-md-12 col-lg-12">
        <div className="btn-group input-group-sm date-selector-button-group">
          <select className="input-sm form-select">
            {dummy.map((option, index) => {
              return <option id={index}>{option}</option>;
            })}
          </select>
        </div>
        <div className="btn-group date-selector-button-group">
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            type="button"
          >
            Q1
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            type="button"
          >
            Q2
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            type="button"
          >
            Q3
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            type="button"
          >
            Q4
          </button>
        </div>
        <div className="btn-group date-selector-button-group">
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Jan
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Feb
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Mar
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Apr
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            May
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Jun
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Jul
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Aug
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Sep
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Oct
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Nov
          </button>
          <button
            className="btn btn-primary btn-sm btn-date-selector"
            ng-click="clearDateExcept('selectedMonth')"
            ng-model="selectedDate.month"
            type="button"
          >
            Dec
          </button>
        </div>
        <div className="btn-group input-group-sm date-selector-button-group">
          <select className="input-sm form-select">
            <option selected disabled value="">
              -weeks-
            </option>
            {weeks.map((option, index) => {
              return <option id={index}>{option}</option>;
            })}
          </select>
        </div>
        {props.selected && (
          <div className="date-selector-calendar" ng-show="showSpecificDate">
            <input
              className="inline-form-control data-selector-text dateSelectorWidth"
              close-on-date-selection="true"
              close-text="Close"
              date-disabled="disabled(date, mode)"
              datepicker-append-to-body="true"
              datepicker-options="dateOptions"
              is-open="specificDateSelectorOpened"
              ng-disabled="!showSpecificDate"
              ng-model="selectedDate.specificDate"
              placeholder="No date selected"
              readonly="readonly"
              show-button-bar="true"
              uib-datepicker-popup="{{dateFormat}}"
            />
            <button
              className="btn btn-sm btn-default"
              ng-click="openSpecificDateSelector()"
            >
              <i className="icon-calendar"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateSelector;
