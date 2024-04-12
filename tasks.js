module.exports = [
  {
    name: 'assessment-after-registration',
    title: 'Pregnancy Follow up',
    icon: 'healthcare',
    appliesTo: 'reports',
    appliesToType: ['pregn'],
    appliesIf: function () {
      return user.role === 'chp_supervisor';
    },
    actions: [{ form: 'pregnancy_follow_up_form' }],
    events: [
      {
        start: 5,
        days: 5,
        end: 2,
      },
    ],
  },
  {
    name: 'assessment-after-follow-up',
    title: 'Pregnancy Follow up test',
    icon: 'followup',
    appliesTo: 'reports',
    appliesToType: ['pregn'],
    appliesIf: function () {
      return user.role === 'chp_supervisor';
    },
    actions: [{ form: 'pregnancy_follow_up_form' }],
    events: [
      {
        start: 5,
        days: 5,
        end: 2,
      },
    ],
  },
  // checkup assessment
  {
    name: 'checkup-assessment-after-registration',
    title: 'Pregnancy Check up',
    icon: 'checkup',
    appliesTo: 'reports',//contacts
    appliesToType: ['pregn'],
    appliesIf: function () {
      return user.role === 'chp_supervisor';
    },
    actions: [{ form: 'pregnancy_check_up_form' }],
    events: [
      {
        start: 5,
        days: 5,
        end: 2,
      },
    ],
  },
];
