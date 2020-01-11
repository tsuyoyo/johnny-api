///
//  Generated code. Do not modify.
//  source: proto/empty.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

class EmptyResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('EmptyResponse', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..hasRequiredFields = false
  ;

  EmptyResponse._() : super();
  factory EmptyResponse() => create();
  factory EmptyResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory EmptyResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  EmptyResponse clone() => EmptyResponse()..mergeFromMessage(this);
  EmptyResponse copyWith(void Function(EmptyResponse) updates) => super.copyWith((message) => updates(message as EmptyResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static EmptyResponse create() => EmptyResponse._();
  EmptyResponse createEmptyInstance() => create();
  static $pb.PbList<EmptyResponse> createRepeated() => $pb.PbList<EmptyResponse>();
  @$core.pragma('dart2js:noInline')
  static EmptyResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<EmptyResponse>(create);
  static EmptyResponse _defaultInstance;
}

