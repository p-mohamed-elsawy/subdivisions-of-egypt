'use strict'

const governorates = require('./data.json')

exports.getGovernoratesWithSubregions = function Governorates() {
  return governorates.map(governorate => (governorate));
}

exports.getGovernorates = function Governorates() {
  return governorates.map(governorate => ({
     id: governorate.id, name_ar: governorate.name_ar,name_en: governorate.name_en}));
}

exports.getGovernorate = function Subregions(GovernorateID) {
  return governorates.find(x => x.id === GovernorateID)
}

exports.getSubregions = function Subregions(GovernorateID) {
  return governorates.find(x => x.id === GovernorateID).subregions
}
