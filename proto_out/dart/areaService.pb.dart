///
//  Generated code. Do not modify.
//  source: proto/areaService.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'area.pb.dart' as $0;

class GetAreaCityResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GetAreaCityResponse', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  GetAreaCityResponse._() : super();
  factory GetAreaCityResponse() => create();
  factory GetAreaCityResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetAreaCityResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GetAreaCityResponse clone() => GetAreaCityResponse()..mergeFromMessage(this);
  GetAreaCityResponse copyWith(void Function(GetAreaCityResponse) updates) => super.copyWith((message) => updates(message as GetAreaCityResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetAreaCityResponse create() => GetAreaCityResponse._();
  GetAreaCityResponse createEmptyInstance() => create();
  static $pb.PbList<GetAreaCityResponse> createRepeated() => $pb.PbList<GetAreaCityResponse>();
  @$core.pragma('dart2js:noInline')
  static GetAreaCityResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetAreaCityResponse>(create);
  static GetAreaCityResponse _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

