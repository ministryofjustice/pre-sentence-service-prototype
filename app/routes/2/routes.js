module.exports = function (router) {

  var version = "2";

  router.get('/' + version + '/verification-report/offender-details', function (req, res) {
    res.render(version + '/verification-report/offender-details', {
      'baseincomesourceComplete':req.session.data.baseincomesourceComplete
    })
});

router.post('/' + version + '/verification-report/offender-details', function (req, res) {
  res.redirect('required-sections')
})
}
