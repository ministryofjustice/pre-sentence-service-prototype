module.exports = function (router) {

  var version = "6";

  router.get('/' + version + '/verification-report/defendant-details', function (req, res) {
    res.render(version + '/verification-report/defendant-details')
  });

  router.post('/' + version + '/verification-report/defendant-details', function (req, res) {
    res.redirect('offences')
  });

  router.get('/' + version + '/verification-report/offences', function (req, res) {
    res.render(version + '/verification-report/offences')
  });

  router.post('/' + version + '/verification-report/offences', function (req, res) {
    res.redirect('required-sections')
  });

  router.get('/' + version + '/verification-report/required-sections', function (req, res) {
    res.render(version + '/verification-report/required-sections')
  });

  router.post('/' + version + '/verification-report/required-sections', function (req, res) {
    res.redirect('common-data')
  });

  router.get('/' + version + '/verification-report/common-data', function (req, res) {
    res.render(version + '/verification-report/common-data')
  });

  router.post('/' + version + '/verification-report/common-data', function (req, res) {
    const verificationReportSections = req.session.data['verification-report-sections']

    if (verificationReportSections == 'unpaidWork' || verificationReportSections == 'both'){
      res.redirect('unpaid-work')
    }else {
      res.redirect('electronic-monitoring-for-curfew')
    }

  });

  router.get('/' + version + '/verification-report/unpaid-work', function (req, res) {
    res.render(version + '/verification-report/unpaid-work')
  });

  router.post('/' + version + '/verification-report/unpaid-work', function (req, res) {
    const verificationReportSections = req.session.data['verification-report-sections']

    if (verificationReportSections == 'both'){
      res.redirect('electronic-monitoring-for-curfew')
    }else {
      res.redirect('check-answers')
    }
  })

  router.get('/' + version + '/verification-report/electronic-monitoring-for-curfew', function (req, res) {
    res.render(version + '/verification-report/electronic-monitoring-for-curfew')
  });

  router.post('/' + version + '/verification-report/electronic-monitoring-for-curfew', function (req, res) {
    res.redirect('proposal')
  })

  router.get('/' + version + '/verification-report/proposal', function (req, res) {
    res.render(version + '/verification-report/proposal')
  });

  router.post('/' + version + '/verification-report/proposal', function (req, res) {
    const suitableFor = req.session.data['suitable-for']
    const domesticAbuseResult = req.session.data['domestic-abuse-check-result']
    const safeguardingResult = req.session.data['safeguarding-check-result']
    const informedConsent = req.session.data['informed-consent-electronic-monitoring']

    if (suitableFor == 'Electronic monitoring only' || suitableFor == 'Both unpaid work and electronic monitoring'){
      if (domesticAbuseResult != 'No domestic abuse issues' || safeguardingResult != 'No safeguarding issues' || informedConsent != 'Yes, they have given informed consent'){
        res.redirect('proposal-error')
      } else {
        res.redirect('check-answers')
      }
    } else {
      res.redirect('check-answers')
    }
  })

  router.get('/' + version + '/verification-report/check-answers', function (req, res) {
    res.render(version + '/verification-report/check-answers')
  });

  router.post('/' + version + '/verification-report/check-answers', function (req, res) {
    res.redirect('sign-your-report')
  })

  router.get('/' + version + '/verification-report/sign-your-report', function (req, res) {
    res.render(version + '/verification-report/sign-your-report')
  });

  router.post('/' + version + '/verification-report/sign-your-report', function (req, res) {
    res.redirect('publish-report')
  })

  router.get('/' + version + '/verification-report/publish-report', function (req, res) {
    res.render(version + '/verification-report/publish-report')
  });

  router.post('/' + version + '/verification-report/publish-report', function (req, res) {
    res.redirect('confirmation')
  })

  router.get('/' + version + '/verification-report/confirmation', function (req, res) {
    res.render(version + '/verification-report/confirmation')
  });

  router.post('/' + version + '/verification-report/confirmation', function (req, res) {
    res.redirect('PAGE')
  })
}
