module.exports = function (router) {

  var version = "15";


  router.get('/' + version + '/pre-sentence-report/defendant-details', function (req, res) {
    req.session.data.pageAction = 'false'

    const addressVerificationList = [
      'Choose proof of address',
      'Bank or credit card statement',
      'Council tax bill',
      'I have not seen proof of address',
      'Mortgage statement',
      'Self reported',
      'Tenancy agreement',
      'Utility bill'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['address-verification']
      }
    })

    res.render(version + '/pre-sentence-report/defendant-details' , {addressVerificationList})
  });

  router.post('/' + version + '/pre-sentence-report/defendant-details', function (req, res) {
    req.session.data['primary-address-line-1'] = req.session.data['address-line-1']
    req.session.data['primary-address-line-2'] = req.session.data['address-line-2']
    req.session.data['primary-address-town'] = req.session.data['address-town']
    req.session.data['primary-address-county'] = req.session.data['address-county']
    req.session.data['primary-address-postcode'] = req.session.data['address-postcode']
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('defendant-details')
    } else if (pageAction ==='addAddress'){
      res.redirect('addresses/add-address')
    } else {
      res.redirect('offences')
    }
  });

  router.get('/' + version + '/pre-sentence-report/offences', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/offences')
  });

  router.post('/' + version + '/pre-sentence-report/offences', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('offences')
    } else if(pageAction == 'addOffence') {
      res.redirect('offences/add-offence')
    }else {
      res.redirect('victim-impact-assessment')
    }
  });

  router.get('/' + version + '/pre-sentence-report/offences/add-offence', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/offences/add-offence')
  });

  router.post('/' + version + '/pre-sentence-report/offences/add-offence', function (req, res) {
    res.redirect('../offences')
  });

  router.get('/' + version + '/pre-sentence-report/offences/delete-offence', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/offences/delete-offence')
  });

  router.post('/' + version + '/pre-sentence-report/offences/delete-offence', function (req, res) {
    req.session.data.offenceOneHidden = 'true'

    res.redirect('../offences')
  });

  router.get('/' + version + '/pre-sentence-report/victim-impact-assessment', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/victim-impact-assessment')
  });

  router.post('/' + version + '/pre-sentence-report/victim-impact-assessment', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('victim-impact-assessment')
    } else {
      res.redirect('culpability-and-risk')
    }
  });

  router.get('/' + version + '/pre-sentence-report/culpability-and-risk', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/culpability-and-risk')
  });

  router.post('/' + version + '/pre-sentence-report/culpability-and-risk', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('culpability-and-risk')
    } else {
      res.redirect('consider-sentence-components')
    }
  });

  router.get('/' + version + '/pre-sentence-report/consider-sentence-components', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/consider-sentence-components')
  });

  router.post('/' + version + '/pre-sentence-report/consider-sentence-components', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('consider-sentence-components')
    } else {
      res.redirect('essential-information')
    }
  });

  router.get('/' + version + '/pre-sentence-report/essential-information', function (req, res) {
    req.session.data.pageAction = 'false'

    const domesticAbuseVerificationList = [
      'Choose an option',
      'I have not seen of proof domestic abuse checks',
      'Police checks or Police National Database laptop'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['domestic-abuse-verification']
      }
    })

    const safeguardingVerificationList = [
      'Choose an option',
      'Social services checks'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['safeguarding-verification']
      }
    })

    const healthConditionsVerificationList = [
      'Choose an option',
      'Fit note (Statement of Fitness to Work)',
      'I have not seen proof of health conditions',
      'Other',
      'Prescription',
      'Self reported'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['health-conditions-verification']
      }
    })

    const dependantsCaringVerificationList = [
      'Choose an option',
      'Email or letter',
      'I have not seen proof of dependants/caring responsibilities',
      'Self reported',
      'Telephone call'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['dependants-caring-verification']
      }
    })

    const employmentVerificationList = [
      'Choose an option',
      'Email',
      'I have not seen proof of employment/working patterns',
      'Other',
      'Telephone call',
      'Wage slip or contract'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['employment-verification']
      }
    })

    res.render(version + '/pre-sentence-report/essential-information', {
      domesticAbuseVerificationList,
      safeguardingVerificationList,
      healthConditionsVerificationList,
      dependantsCaringVerificationList,
      employmentVerificationList
    })
  });

    router.post('/' + version + '/pre-sentence-report/essential-information', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction === 'saveDraft'){
      res.redirect('essential-information')
    } else {
      res.redirect('unpaid-work')
    }
  });


  router.get('/' + version + '/pre-sentence-report/unpaid-work', function (req, res) {
    req.session.data.pageAction = 'false'

    const benefitsVerificationList = [
      'Choose an option',
      'Confirmation from the Department of Work and Pensions (DWP)',
      'I have not recorded proof of benefits',
      'Letter from HM Revenue and Customs',
      'Letter from Jobcentre Plus',
      'Letter from the Pension Service',
      'Other',
      'Pension advice slip',
      'Recent bank statement',
      'Self reported'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['benefits-verification']
      }
    })

    res.render(version + '/pre-sentence-report/unpaid-work', {benefitsVerificationList})
  });

  router.post('/' + version + '/pre-sentence-report/unpaid-work', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('unpaid-work')
    } else {
      res.redirect('electronic-monitoring-for-curfew')
    }
  })

  router.get('/' + version + '/pre-sentence-report/electronic-monitoring-for-curfew', function (req, res) {
    req.session.data.pageAction = 'false'

    const electronicMonitoringCurfewVerificationList = [
      'Choose an option',
      'I have not recorded consent',
      'In person',
      'Telephone call'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['electronic-monitoring-curfew-verification']
      }
    })

    res.render(version + '/pre-sentence-report/electronic-monitoring-for-curfew', {electronicMonitoringCurfewVerificationList})
  });

  router.post('/' + version + '/pre-sentence-report/electronic-monitoring-for-curfew', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('electronic-monitoring-for-curfew')
    } else {
      res.redirect('suitability-decision')
    }
  })

  router.get('/' + version + '/pre-sentence-report/suitability-decision', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/suitability-decision')
  });

  router.post('/' + version + '/pre-sentence-report/suitability-decision', function (req, res) {
    const pageAction = req.session.data['pageAction']
    const domesticAbuseResult = req.session.data['domestic-abuse-check-result']
    const safeguardingResult = req.session.data['safeguarding-check-result']
    const informedConsent = req.session.data['informed-consent-electronic-monitoring']
    const suitabilityDecision = req.session.data['suitability-decision']

    if (pageAction == 'saveDraft'){
      res.redirect('suitability-decision')
    } else if (suitabilityDecision == 'Electronic monitoring curfew only' || suitabilityDecision == 'Both unpaid work and electronic monitoring curfew') {
      if (domesticAbuseResult != 'No concerns about domestic abuse' || safeguardingResult != 'No concerns about child safeguarding' || informedConsent != 'Yes, they have given informed consent'){
        res.redirect('suitability-decision-error')
      } else {
        res.redirect('preview-report')
      }
    } else {
      res.redirect('preview-report')
    }
  })

  router.get('/' + version + '/pre-sentence-report/preview-report', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/preview-report')
  });

  router.post('/' + version + '/pre-sentence-report/preview-report', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('preview-report')
    } else {
      res.redirect('sign-your-report')
    }
  })

  router.get('/' + version + '/pre-sentence-report/sign-your-report', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/sign-your-report')
  });

  router.post('/' + version + '/pre-sentence-report/sign-your-report', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('sign-your-report')
    } else {
      res.redirect('publish-report')
    }
  })

  router.get('/' + version + '/pre-sentence-report/publish-report', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/publish-report')
  });

  router.post('/' + version + '/pre-sentence-report/publish-report', function (req, res) {
    res.redirect('confirmation')
  })

  router.get('/' + version + '/pre-sentence-report/confirmation', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/confirmation')
  });

  router.post('/' + version + '/pre-sentence-report/confirmation', function (req, res) {
    res.redirect('PAGE')
  })

  router.get('/' + version + '/pre-sentence-report/addresses/add-address', function (req, res) {
    res.render(version + '/pre-sentence-report/addresses/add-address')
  });

  router.post('/' + version + '/pre-sentence-report/addresses/add-address', function (req, res) {
    req.session.data.addEditAddress = "Add "
    req.session.data.parentsAddressVisible = 'true'

    res.redirect('../defendant-details')
  })

  router.get('/' + version + '/pre-sentence-report/addresses/delete-address', function (req, res) {
    res.render(version + '/pre-sentence-report/addresses/delete-address')
  });

  router.post('/' + version + '/pre-sentence-report/addresses/delete-address', function (req, res) {
    req.session.data.parentsAddressVisible = 'false'

    res.redirect('../defendant-details')
  })
}
