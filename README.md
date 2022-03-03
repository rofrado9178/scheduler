# Interview Scheduler

Interview Scheduler is a single page React apps for book and also scheduling the interview.

This is my first React Apps as a LighthouseLabs Bootcamp student, for purpose practicing my react skill, combine with axios for fetching API data

!["showing list of interview schedule"](https://github.com/rofrado9178/scheduler/blob/production/docs/Screenshot%20by%20Snip%20My%20at%20Mar%202%2C%202022%20at%204:40:16%20PM.png)

!["showing list of interview schedule with full booked showing no remaining spot available"](https://github.com/rofrado9178/scheduler/blob/production/docs/Screenshot%20by%20Snip%20My%20at%20Mar%202%2C%202022%20at%204:40:53%20PM.png)

!["form to create new booking"](https://github.com/rofrado9178/scheduler/blob/production/docs/Screenshot%20by%20Snip%20My%20at%20Mar%202%2C%202022%20at%204:41:35%20PM.png)

!["error message when trying to save without fill the name"](https://github.com/rofrado9178/scheduler/blob/production/docs/Screenshot%20by%20Snip%20My%20at%20Mar%202%2C%202022%20at%204:42:47%20PM.png)

!["saving ux"](https://github.com/rofrado9178/scheduler/blob/production/docs/Screenshot%20by%20Snip%20My%20at%20Mar%202%2C%202022%20at%204:44:57%20PM.png)

!["new show after booking"](https://github.com/rofrado9178/scheduler/blob/production/docs/Screenshot%20by%20Snip%20My%20at%20Mar%202%2C%202022%20at%204:45:20%20PM.png)

!["confirmation transition before delete appointment"](https://github.com/rofrado9178/scheduler/blob/production/docs/Screenshot%20by%20Snip%20My%20at%20Mar%202%2C%202022%20at%204:45:57%20PM.png)

!["delete ux"](https://github.com/rofrado9178/scheduler/blob/production/docs/Screenshot%20by%20Snip%20My%20at%20Mar%202%2C%202022%20at%204:47:24%20PM.png)

!["edit form"](https://github.com/rofrado9178/scheduler/blob/production/docs/Screenshot%20by%20Snip%20My%20at%20Mar%202%2C%202022%20at%204:52:54%20PM.png)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

### Component

- App
  - props: yes
  - state: yes
  - component:
    - DayList
- Button

  - props: yes
  - state:
  - user:
    - many

- DayList
  - Props: yes
  - state:
  - component:
    - DayListItem
      - props: yes
      - state:
      - user:
- InterviewerListItem
  - props: id,name,avatar,selected, setInterviewer function
  - state:
  - components:
- InterviewerList
  - props:
  - state:
  - component: InterviewerListItem
- Appointment
  - props:
  - state: Empty, Show, Form, Confirm, Status, Error
  - component: Empty, Show, Form, Confirm, Status, Error
