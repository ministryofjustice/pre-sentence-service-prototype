module.exports = function (router) {

  var version = "3";

  router.get('/' + version + '/verification-report/offender-details', function (req, res) {
    res.render(version + '/verification-report/offender-details')
  });

  router.post('/' + version + '/verification-report/offender-details', function (req, res) {
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
      res.redirect('electronic-monitoring')
    }
  });

  router.get('/' + version + '/verification-report/unpaid-work', function (req, res) {
    res.render(version + '/verification-report/unpaid-work')
  });

  router.post('/' + version + '/verification-report/unpaid-work', function (req, res) {
    const verificationReportSections = req.session.data['verification-report-sections']

    if (verificationReportSections == 'both'){
      res.redirect('electronic-monitoring')
    }else {
      res.redirect('check-answers')
    }
  })

  router.get('/' + version + '/verification-report/electronic-monitoring', function (req, res) {
    res.render(version + '/verification-report/electronic-monitoring')
  });

  router.post('/' + version + '/verification-report/electronic-monitoring', function (req, res) {
    res.redirect('check-answers')
  })
}
