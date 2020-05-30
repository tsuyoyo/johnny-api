///
//  Generated code. Do not modify.
//  source: proto/suggestService.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'area.pb.dart' as $0;

class GetSuggestCityResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GetSuggestCityResponse', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  GetSuggestCityResponse._() : super();
  factory GetSuggestCityResponse() => create();
  factory GetSuggestCityResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetSuggestCityResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GetSuggestCityResponse clone() => GetSuggestCityResponse()..mergeFromMessage(this);
  GetSuggestCityResponse copyWith(void Function(GetSuggestCityResponse) updates) => super.copyWith((message) => updates(message as GetSuggestCityResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetSuggestCityResponse create() => GetSuggestCityResponse._();
  GetSuggestCityResponse createEmptyInstance() => create();
  static $pb.PbList<GetSuggestCityResponse> createRepeated() => $pb.PbList<GetSuggestCityResponse>();
  @$core.pragma('dart2js:noInline')
  static GetSuggestCityResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetSuggestCityResponse>(create);
  static GetSuggestCityResponse _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

