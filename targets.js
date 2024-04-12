module.exports = [
  {
    id: 'assessments-all-time',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.assessments.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregn'],
    date: 'now',
  },
  {
    id: 'assessments-this-month',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: 2,
    translation_key: 'targets.assessments.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregn'],
    date: 'reported',
  },
  {
    id: 'total-contacts-with-cough-this-month',
    type: 'count',
    icon: 'icon-cough',
    goal: -1,
    translation_key: 'targets.assessments.total.cough.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregn'],
    appliesIf: function (contact, report) {
      return Utils.getField(report, 'group_assessment.cough') === 'yes';
    },
    idType: 'contact',
    date: 'reported',
  },
  {
    id: 'percentage-contacts-with-cough-this-month',
    type: 'percent',
    icon: 'pregnancy',
    goal: -1,
    translation_key: 'targets.assessments.percentage.cough.title',
    percentage_count_translation_key:
      'targets.assessments.percentage.with.cough',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregn'],
    appliesIf: function (contact) {
      return (
        contact.contact &&
        contact.contact.parent &&
        contact.contact.parent.parent &&
        contact.contact.parent.parent.parent
      );
    },
    passesIf: function (contact, report) {
      return Utils.getField(report, 'group_assessment.cough') === 'yes';
    },
    idType: 'contact',
    date: 'reported',
  },
  {
    id: 'households-with-assessments-this-month',
    type: 'count',
    icon: 'icon-household',
    goal: 2,
    translation_key: 'targets.households.with.assessments.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregn'],
    date: 'reported',
    emitCustom: (emit, original, contact) => {
      const householdId = contact.contact && contact.contact.parent._id;
      emit(
        Object.assign({}, original, {
          _id: householdId,
          pass: true,
        })
      );
    },
  }
];
