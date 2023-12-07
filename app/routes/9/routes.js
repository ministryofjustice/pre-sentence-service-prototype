module.exports = function (router) {

  var version = "9";

  router.get('/' + version + '/verification-report/defendant-details', function (req, res) {
    req.session.data.draftSaved = 'false'

    const addressVerificationList = [
      'Choose proof of address',
      'Council tax statement',
      'Household bill',
      'I have not seen proof of address',
      'Mortgage statement',
      'Other',
      'Professional Judgement',
      'Tenancy agreement'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['address-verification']
      }
    })

    res.render(version + '/verification-report/defendant-details' , {addressVerificationList})
  });

  router.post('/' + version + '/verification-report/defendant-details', function (req, res) {
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('defendant-details')
    } else {
      res.redirect('offences')
    }
  });

  router.get('/' + version + '/verification-report/offences', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/offences')
  });

  router.post('/' + version + '/verification-report/offences', function (req, res) {
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('offences')
    } else {
      res.redirect('choose-sections')
    }
  });

  router.get('/' + version + '/verification-report/choose-sections', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/choose-sections')
  });

  router.post('/' + version + '/verification-report/choose-sections', function (req, res) {
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('choose-sections')
    } else {
      res.redirect('essential-information')
    }
  });

  router.get('/' + version + '/verification-report/essential-information', function (req, res) {
    req.session.data.draftSaved = 'false'

    const domesticAbuseVerificationList = [
      'Choose an option',
      'Concerns on police checks',
      'I have not seen proof domestic abuse checks',
      'No concerns on police checks'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['domestic-abuse-verification']
      }
    })

    const safeguardingVerificationList = [
      'Choose an option',
      'Concerns from social services',
      'I have not seen proof of safeguarding checks',
      'No concerns from social services'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['safeguarding-verification']
      }
    })

    const healthConditionsVerificationList = [
      'Choose an option',
      'I have not seen proof of health conditions',
      'Other',
      'Prescription',
      'Statement of Fitness to Work'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['health-conditions-verification']
      }
    })

    const dependantsCaringVerificationList = [
      'Choose an option',
      'I have not seen proof of dependants/caring responsibilities',
      'Other',
      'Telephone call',
      'Email',
      'Waiting for information to come back'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['dependants-caring-verification']
      }
    })

    const employmentVerificationList = [
      'Choose an option',
      'I have not seen proof of employment and working patterns',
      'Other',
      'Telephone call',
      'Email',
      'Waiting for information to come back'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['employment-verification']
      }
    })

    res.render(version + '/verification-report/essential-information', {
      domesticAbuseVerificationList,
      safeguardingVerificationList,
      healthConditionsVerificationList,
      dependantsCaringVerificationList,
      employmentVerificationList
    })
  });

  router.post('/' + version + '/verification-report/essential-information', function (req, res) {
    const verificationReportSections = req.session.data['verification-report-sections']
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('essential-information')
    } else {
      if (verificationReportSections == 'Include sections for unpaid work only' || verificationReportSections == 'Include sections for both unpaid work and electronic monitoring'){
        res.redirect('unpaid-work')
      }else {
        res.redirect('electronic-monitoring-for-curfew')
      }
    }
  });

  router.get('/' + version + '/verification-report/unpaid-work', function (req, res) {
    req.session.data.draftSaved = 'false'

    const benefitsVerificationList = [
      'Choose an option',
      'Confirmation from Department of Work and Pensions',
      'I have not recorded proof of benefits',
      'Letter from HM Revenue and Customs',
      'Letter from the Jobcentre Plus',
      'Letter from The Pension Service',
      'Other',
      'Pension advice slip',
      'Recent bank statement'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['benefits-verification']
      }
    })

    res.render(version + '/verification-report/unpaid-work', {benefitsVerificationList})
  });

  router.post('/' + version + '/verification-report/unpaid-work', function (req, res) {
    const verificationReportSections = req.session.data['verification-report-sections']
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('unpaid-work')
    } else {
      if (verificationReportSections == 'Include sections for both unpaid work and electronic monitoring'){
        res.redirect('electronic-monitoring-for-curfew')
      }else {
        res.redirect('check-answers')
      }
    }
  })

  router.get('/' + version + '/verification-report/electronic-monitoring-for-curfew', function (req, res) {
    req.session.data.draftSaved = 'false'

    const electronicMonitoringCurfewVerificationList = [
      'Choose an option',
      'Email',
      'I have not recorded consent',
      'In person',
      'Other',
      'Phone call',
      'Text message'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['electronic-monitoring-curfew-verification']
      }
    })

    res.render(version + '/verification-report/electronic-monitoring-for-curfew', {electronicMonitoringCurfewVerificationList})
  });

  router.post('/' + version + '/verification-report/electronic-monitoring-for-curfew', function (req, res) {
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('electronic-monitoring-for-curfew')
    } else {
      res.redirect('suitability-decision')
    }
  })

  router.get('/' + version + '/verification-report/suitability-decision', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/suitability-decision')
  });

  router.post('/' + version + '/verification-report/suitability-decision', function (req, res) {
    const draftSaved = req.session.data['draftSaved']
    const suitableFor = req.session.data['suitable-for']
    const domesticAbuseResult = req.session.data['domestic-abuse-check-result']
    const safeguardingResult = req.session.data['safeguarding-check-result']
    const informedConsent = req.session.data['informed-consent-electronic-monitoring']

    if (draftSaved == 'true'){
      res.redirect('suitability-decision')
    } else {
      if (suitableFor == 'Include sections for electronic monitoring only' || suitableFor == 'Include sections for both unpaid work and electronic monitoring'){
        if (domesticAbuseResult != 'No domestic abuse issues' || safeguardingResult != 'No safeguarding issues' || informedConsent != 'Yes, they have given informed consent'){
          res.redirect('suitability-decision-error')
        } else {
          res.redirect('check-answers')
        }
      } else {
        res.redirect('check-answers')
      }
    }

  })

  router.get('/' + version + '/verification-report/check-answers', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/check-answers')
  });

  router.post('/' + version + '/verification-report/check-answers', function (req, res) {
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('check-answers')
    } else {
      res.redirect('sign-your-report')
    }
  })

  router.get('/' + version + '/verification-report/sign-your-report', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/sign-your-report')
  });

  router.post('/' + version + '/verification-report/sign-your-report', function (req, res) {
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('sign-your-report')
    } else {
      res.redirect('publish-report')
    }
  })

  router.get('/' + version + '/verification-report/publish-report', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/publish-report')
  });

  router.post('/' + version + '/verification-report/publish-report', function (req, res) {
    res.redirect('confirmation')
  })

  router.get('/' + version + '/verification-report/confirmation', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/confirmation')
  });

  router.post('/' + version + '/verification-report/confirmation', function (req, res) {
    res.redirect('PAGE')
  })
}
