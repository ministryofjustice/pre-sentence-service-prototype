module.exports = function (router) {

  var version = "7";

  router.get('/' + version + '/verification-report/defendant-details', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/defendant-details')
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

    res.render(version + '/verification-report/essential-information')
  });

  router.post('/' + version + '/verification-report/essential-information', function (req, res) {
    const verificationReportSections = req.session.data['verification-report-sections']
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('essential-information')
    } else {
      if (verificationReportSections == 'unpaidWork' || verificationReportSections == 'both'){
        res.redirect('unpaid-work')
      }else {
        res.redirect('electronic-monitoring-for-curfew')
      }
    }
  });

  router.get('/' + version + '/verification-report/unpaid-work', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/unpaid-work')
  });

  router.post('/' + version + '/verification-report/unpaid-work', function (req, res) {
    const verificationReportSections = req.session.data['verification-report-sections']
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('unpaid-work')
    } else {
      if (verificationReportSections == 'both'){
        res.redirect('electronic-monitoring-for-curfew')
      }else {
        res.redirect('check-answers')
      }
    }
  })

  router.get('/' + version + '/verification-report/electronic-monitoring-for-curfew', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/electronic-monitoring-for-curfew')
  });

  router.post('/' + version + '/verification-report/electronic-monitoring-for-curfew', function (req, res) {
    const draftSaved = req.session.data['draftSaved']

    if (draftSaved == 'true'){
      res.redirect('electronic-monitoring-for-curfew')
    } else {
      res.redirect('recommendation')
    }
  })

  router.get('/' + version + '/verification-report/recommendation', function (req, res) {
    req.session.data.draftSaved = 'false'

    res.render(version + '/verification-report/recommendation')
  });

  router.post('/' + version + '/verification-report/recommendation', function (req, res) {
    const draftSaved = req.session.data['draftSaved']
    const suitableFor = req.session.data['suitable-for']
    const domesticAbuseResult = req.session.data['domestic-abuse-check-result']
    const safeguardingResult = req.session.data['safeguarding-check-result']
    const informedConsent = req.session.data['informed-consent-electronic-monitoring']

    if (draftSaved == 'true'){
      res.redirect('recommendation')
    } else {
      if (suitableFor == 'Electronic monitoring only' || suitableFor == 'Both unpaid work and electronic monitoring'){
        if (domesticAbuseResult != 'No domestic abuse issues' || safeguardingResult != 'No safeguarding issues' || informedConsent != 'Yes, they have given informed consent'){
          res.redirect('recommendation-error')
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
