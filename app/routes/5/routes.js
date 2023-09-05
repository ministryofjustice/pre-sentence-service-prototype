module.exports = function (router) {

  var version = "5";

  router.get('/' + version + '/verification-report/offender-details', function (req, res) {
    res.render(version + '/verification-report/offender-details')
  });

  router.post('/' + version + '/verification-report/offender-details', function (req, res) {
    res.redirect('common-data')
  });

  router.get('/' + version + '/verification-report/common-data', function (req, res) {
    res.render(version + '/verification-report/common-data')
  });

  router.post('/' + version + '/verification-report/common-data', function (req, res) {
    res.redirect('required-sections')
  });

  router.get('/' + version + '/verification-report/required-sections', function (req, res) {
    res.render(version + '/verification-report/required-sections')
  });

  router.post('/' + version + '/verification-report/required-sections', function (req, res) {
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
    res.redirect('check-answers')
  })
}
