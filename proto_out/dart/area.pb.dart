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

class Area extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('Area', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..a<$core.int>(1, 'id', $pb.PbFieldType.O3)
    ..aOS(2, 'name')
    ..e<Prefecture>(3, 'prefecture', $pb.PbFieldType.OE, defaultOrMaker: Prefecture.UNKNOWN, valueOf: Prefecture.valueOf, enumValues: Prefecture.values)
    ..hasRequiredFields = false
  ;

  Area._() : super();
  factory Area() => create();
  factory Area.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Area.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  Area clone() => Area()..mergeFromMessage(this);
  Area copyWith(void Function(Area) updates) => super.copyWith((message) => updates(message as Area));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Area create() => Area._();
  Area createEmptyInstance() => create();
  static $pb.PbList<Area> createRepeated() => $pb.PbList<Area>();
  @$core.pragma('dart2js:noInline')
  static Area getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Area>(create);
  static Area _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get id => $_getIZ(0);
  @$pb.TagNumber(1)
  set id($core.int v) { $_setSignedInt32(0, v); }
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

