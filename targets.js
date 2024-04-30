module.exports = [
  {
    id: 'pregnancy-all-time',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: -1,
    translation_key: 'targets.pregnancy.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregnancy_form'],
    date: 'now',
  },
  {
    id: 'pregnancy-follow-up-all-time',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: 11,
    translation_key: 'targets.pregnancy-follow-up.title',
    subtitle_translation_key: 'targets.all_time.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregnancyfollowup'],
    date: 'now',
  },
  {
    id: 'pregnancy-this-month',
    type: 'count',
    icon: 'icon-healthcare-assessment',
    goal: 2,
    translation_key: 'targets.pregnancy.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregnancy_form'],
    date: 'reported',
  },
  {
    id: 'total-contacts-with-cough-this-month',
    type: 'count',
    icon: 'icon-cough',
    goal: -1,
    translation_key: 'targets.pregnancy.total.cough.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregnancy_form'],
    appliesIf: function (contact, report) {
      return Utils.getField(report, 'group_assessment.cough') === 'yes';
    },
    idType: 'contact',
    date: 'reported',
  },

  {
    id: 'households-with-pregnancy-this-month',
    type: 'count',
    icon: 'icon-household',
    goal: 2,
    translation_key: 'targets.households.with.pregnancy.title',
    subtitle_translation_key: 'targets.this_month.subtitle',
    appliesTo: 'reports',
    appliesToType: ['pregnancy_form'],
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
