import React, { useState } from 'react';

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const frequency = ["None", "Weekly", "Fornightly", "Monthly", "BiMonthly"];

const checkinType = ["Birthday", "messaged", "had a call with", "In person"];

const frequency_to_days = [0, 7, 14, 28, 56];


const formatDateHelper = (date) => {
    return `${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${date.getDate()}`;
};

const formatBirthdayHelper = (date) => {
    return `${date.getDate()} ${monthNames[date.getMonth()]} 19${date.getYear()}`;

};

const formatReminderFrequency = (num) => {
    return frequency[num];
};

const compareName = (a, b) => {
    if (a.f_name > b.f_name) return 1;
    if (a.f_name < b.f_name) return -1;
    return 0;
};

const compareDate = (date1, date2) => {
    if (date1.f_date > date2.f_date) return 1;
    if (date1.f_date < date2.f_date) return -1;
    return 0;
};

const comparePrompts = (p1, p2) => {
    if (p1.daysSinceCheckIn > p2.daysSinceCheckIn) return -1;
    if (p1.daysSinceCheckIn < p2.daysSinceCheckIn) return 1;
    return 0;
};

const daysBetween = (date1, date2) => {
    const diff = Math.abs(date1.getTime() - date2.getTime());
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days;
};

const frequencyInDays = (rem_freq) => {
    return frequency_to_days[rem_freq];
};

const checkInText = (name, type) => {
    if (type === 0) {
        return "You wished " + name + " a happy birthday.";
    } else if (type === 3) {
        return "You saw " + name + " in person."
    } else {
        return"You " + checkinType[type] + " " + name;
    }
};

export {formatDateHelper, formatBirthdayHelper, formatReminderFrequency, compareName, compareDate, daysBetween, comparePrompts, frequencyInDays, checkInText };