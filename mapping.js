module.exports = function(properties) {
  if (properties.model) {
    switch (properties.model) {
      case 'Nexus 7':
        switch (properties.name) {
          case 'nakasig':
          case 'nakasi':
            return 'Nexus_7_2012'
          case 'razor':
          case 'razorg':
            return 'Nexus_7_2013'
        }
        return 'Nexus_7_2012'
      case 'Desire S':
        switch (properties.name) {
          case 'saga':
            return 'Htc_saga'
        }
        return 'Htc_saga'
      case 'GT-I9000':
        switch (properties.name) {
          case 'GT-I9000':
            return 'sansang_glax'
        }
        return 'sansang_glax'
      case ' NXT-DL00':
        return 'huawei_mate8'
      case ' EVO 3D X515m':
	return 'htc_evo'
      case 'AOSP on Mako':
        return 'nexus4'
      case 'NX508J':
        return 'nubizaz9'
      case 'XT912':
        return 'xt912'
      case ' X501':
        return 'letv'
      case 'Milestone':
        return 'moto_milestone'
      case 'PRO 5':
        return 'meizu_pro5'
      case 'ONE A2001':
        return 'one_plus_2'
      default:
        return properties.model.replace(/ /g, '_')
    }
  }
  else {
    return null
  }
}
