///
//  Generated code. Do not modify.
//  source: proto/area.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'area.pbenum.dart';

export 'area.pbenum.dart';

class City extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('City', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, 'id')
    ..aOS(2, 'name')
    ..e<Prefecture>(3, 'prefecture', $pb.PbFieldType.OE, defaultOrMaker: Prefecture.UNKNOWN, valueOf: Prefecture.valueOf, enumValues: Prefecture.values)
    ..hasRequiredFields = false
  ;

  City._() : super();
  factory City() => create();
  factory City.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory City.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  City clone() => City()..mergeFromMessage(this);
  City copyWith(void Function(City) updates) => super.copyWith((message) => updates(message as City));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static City create() => City._();
  City createEmptyInstance() => create();
  static $pb.PbList<City> createRepeated() => $pb.PbList<City>();
  @$core.pragma('dart2js:noInline')
  static City getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<City>(create);
  static City _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get id => $_getSZ(0);
  @$pb.TagNumber(1)
  set id($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  Prefecture get prefecture => $_getN(2);
  @$pb.TagNumber(3)
  set prefecture(Prefecture v) { setField(3, v); }
  @$pb.TagNumber(3)
  $core.bool hasPrefecture() => $_has(2);
  @$pb.TagNumber(3)
  void clearPrefecture() => clearField(3);
}

