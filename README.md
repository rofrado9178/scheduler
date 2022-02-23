# Interview Scheduler

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
  - component:
