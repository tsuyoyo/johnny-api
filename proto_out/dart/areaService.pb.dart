///
//  Generated code. Do not modify.
//  source: proto/areaService.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'area.pb.dart' as $0;

import 'area.pbenum.dart' as $0;

class AddAreaRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AddAreaRequest', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, 'areaName', protoName: 'areaName')
    ..e<$0.Prefecture>(2, 'prefecture', $pb.PbFieldType.OE, defaultOrMaker: $0.Prefecture.UNKNOWN, valueOf: $0.Prefecture.valueOf, enumValues: $0.Prefecture.values)
    ..hasRequiredFields = false
  ;

  AddAreaRequest._() : super();
  factory AddAreaRequest() => create();
  factory AddAreaRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AddAreaRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AddAreaRequest clone() => AddAreaRequest()..mergeFromMessage(this);
  AddAreaRequest copyWith(void Function(AddAreaRequest) updates) => super.copyWith((message) => updates(message as AddAreaRequest));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AddAreaRequest create() => AddAreaRequest._();
  AddAreaRequest createEmptyInstance() => create();
  static $pb.PbList<AddAreaRequest> createRepeated() => $pb.PbList<AddAreaRequest>();
  @$core.pragma('dart2js:noInline')
  static AddAreaRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AddAreaRequest>(create);
  static AddAreaRequest _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get areaName => $_getSZ(0);
  @$pb.TagNumber(1)
  set areaName($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasAreaName() => $_has(0);
  @$pb.TagNumber(1)
  void clearAreaName() => clearField(1);

  @$pb.TagNumber(2)
  $0.Prefecture get prefecture => $_getN(1);
  @$pb.TagNumber(2)
  set prefecture($0.Prefecture v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasPrefecture() => $_has(1);
  @$pb.TagNumber(2)
  void clearPrefecture() => clearField(2);
}

class AddAreaResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('AddAreaResponse', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$0.Area>(1, 'area', subBuilder: $0.Area.create)
    ..hasRequiredFields = false
  ;

  AddAreaResponse._() : super();
  factory AddAreaResponse() => create();
  factory AddAreaResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory AddAreaResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  AddAreaResponse clone() => AddAreaResponse()..mergeFromMessage(this);
  AddAreaResponse copyWith(void Function(AddAreaResponse) updates) => super.copyWith((message) => updates(message as AddAreaResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static AddAreaResponse create() => AddAreaResponse._();
  AddAreaResponse createEmptyInstance() => create();
  static $pb.PbList<AddAreaResponse> createRepeated() => $pb.PbList<AddAreaResponse>();
  @$core.pragma('dart2js:noInline')
  static AddAreaResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<AddAreaResponse>(create);
  static AddAreaResponse _defaultInstance;

  @$pb.TagNumber(1)
  $0.Area get area => $_getN(0);
  @$pb.TagNumber(1)
  set area($0.Area v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasArea() => $_has(0);
  @$pb.TagNumber(1)
  void clearArea() => clearField(1);
  @$pb.TagNumber(1)
  $0.Area ensureArea() => $_ensure(0);
}

class GetAreaResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GetAreaResponse', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.Area>(1, 'areas', $pb.PbFieldType.PM, subBuilder: $0.Area.create)
    ..hasRequiredFields = false
  ;

  GetAreaResponse._() : super();
  factory GetAreaResponse() => create();
  factory GetAreaResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetAreaResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GetAreaResponse clone() => GetAreaResponse()..mergeFromMessage(this);
  GetAreaResponse copyWith(void Function(GetAreaResponse) updates) => super.copyWith((message) => updates(message as GetAreaResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetAreaResponse create() => GetAreaResponse._();
  GetAreaResponse createEmptyInstance() => create();
  static $pb.PbList<GetAreaResponse> createRepeated() => $pb.PbList<GetAreaResponse>();
  @$core.pragma('dart2js:noInline')
  static GetAreaResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetAreaResponse>(create);
  static GetAreaResponse _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.Area> get areas => $_getList(0);
}

