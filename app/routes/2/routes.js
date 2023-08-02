module.exports = function (router) {

  var version = "2";

  router.get('/' + version + '/verification-report/offender-details', function (req, res) {
    res.render(version + '/verification-report/offender-details')
  });

  router.post('/' + version + '/verification-report/offender-details', function (req, res) {
    res.redirect('required-sections')
  })

  router.get('/' + version + '/verification-report/required-sections', function (req, res) {
    res.render(version + '/verification-report/required-sections')
  });

  router.post('/' + version + '/verification-report/required-sections', function (req, res) {
    res.redirect('unpaid-work')
  })
}
