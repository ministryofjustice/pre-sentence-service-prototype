module.exports = function (router) {

  var version = "17";


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
      res.redirect('summary-of-offences-under-consideration')
    }
  });

  router.get('/' + version + '/pre-sentence-report/summary-of-offences-under-consideration', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/summary-of-offences-under-consideration')
  });

  router.post('/' + version + '/pre-sentence-report/summary-of-offences-under-consideration', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('summary-of-offences-under-consideration')
    }else {
      res.redirect('victim-impact-assessment')
    }
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
      res.redirect('pattern-of-offending-and-response-to-supervision')
    }
  });

  router.get('/' + version + '/pre-sentence-report/pattern-of-offending-and-response-to-supervision', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/pattern-of-offending-and-response-to-supervision')
  });

  router.post('/' + version + '/pre-sentence-report/pattern-of-offending-and-response-to-supervision', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('pattern-of-offending-and-response-to-supervision')
    } else {
      res.redirect('additional-behaviours-and-lifestyle-considerations')
    }
  });

  router.get('/' + version + '/pre-sentence-report/additional-behaviours-and-lifestyle-considerations', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/additional-behaviours-and-lifestyle-considerations')
  });

  router.post('/' + version + '/pre-sentence-report/additional-behaviours-and-lifestyle-considerations', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('additional-behaviours-and-lifestyle-considerations')
    } else {
      res.redirect('culpability-and-risk')
    }
  });

  router.get('/' + version + '/pre-sentence-report/culpability-and-risk', function (req, res) {
    req.session.data.pageAction = 'false'

    const riskSeriousHarmOthersList = [
      'Choose an option',
      'No risk',
      'Low risk',
      'Medium risk',
      'High risk',
      'Very high risk'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['risk-serious-harm-others-verification']
      }
    })

    const riskSeriousHarmKnownIndividualsList = [
      'Choose an option',
      'No risk',
      'Low risk',
      'Medium risk',
      'High risk',
      'Very high risk'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['risk-serious-harm-known-individuals-verification']
      }
    })

    const riskDomesticAbuseList = [
      'Choose an option',
      'No risk',
      'Low risk',
      'Medium risk',
      'High risk',
      'Very high risk'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['risk-domestic-abuse-verification']
      }
    })

    const riskSeriousHarmChildrenList = [
      'Choose an option',
      'No risk',
      'Low risk',
      'Medium risk',
      'High risk',
      'Very high risk'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['risk-serious-harm-children-verification']
      }
    })

    const riskReconvictionList = [
      'Choose an option',
      'No risk',
      'Low risk',
      'Medium risk',
      'High risk',
      'Very high risk'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['risk-reconviction-verification']
      }
    })

    const riskSeriousRecidivismList = [
      'Choose an option',
      'No risk',
      'Low risk',
      'Medium risk',
      'High risk',
      'Very high risk'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['risk-serious-recidivism-verification']
      }
    })

    const riskSeriousHarmToSelfList = [
      'Choose an option',
      'No risk',
      'Low risk',
      'Medium risk',
      'High risk',
      'Very high risk'
    ].map(item => {
      return {
        value: item,
        text: item,
        selected: item === req.session.data['risk-serious-harm-to-self-verification']
      }
    })

    res.render(version + '/pre-sentence-report/culpability-and-risk', {
      riskSeriousHarmOthersList,
      riskSeriousHarmKnownIndividualsList,
      riskDomesticAbuseList,
      riskSeriousHarmChildrenList,
      riskReconvictionList,
      riskSeriousRecidivismList,
      riskSeriousHarmToSelfList})
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
      res.redirect('write-sentencing-proposal')
    }
  });

  router.get('/' + version + '/pre-sentence-report/write-sentencing-proposal', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/write-sentencing-proposal')
  });

  router.post('/' + version + '/pre-sentence-report/write-sentencing-proposal', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('write-sentencing-proposal')
    } else {
      res.redirect('sources-of-information')
    }
  });

  router.get('/' + version + '/pre-sentence-report/sources-of-information', function (req, res) {
    req.session.data.pageAction = 'false'

    res.render(version + '/pre-sentence-report/sources-of-information')
  });

  router.post('/' + version + '/pre-sentence-report/sources-of-information', function (req, res) {
    const pageAction = req.session.data['pageAction']

    if (pageAction == 'saveDraft'){
      res.redirect('sources-of-information')
    } else {
      res.redirect('preview-report')
    }
  });


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
