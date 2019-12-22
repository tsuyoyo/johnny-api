///
//  Generated code. Do not modify.
//  source: proto/error.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'error.pbenum.dart';

export 'error.pbenum.dart';

class PercussionApiError extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PercussionApiError', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..e<PercussionApiError_ErrorCode>(1, 'errorCode', $pb.PbFieldType.OE, protoName: 'errorCode', defaultOrMaker: PercussionApiError_ErrorCode.UNKNOWN, valueOf: PercussionApiError_ErrorCode.valueOf, enumValues: PercussionApiError_ErrorCode.values)
    ..aOS(2, 'message')
    ..hasRequiredFields = false
  ;

  PercussionApiError._() : super();
  factory PercussionApiError() => create();
  factory PercussionApiError.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PercussionApiError.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PercussionApiError clone() => PercussionApiError()..mergeFromMessage(this);
  PercussionApiError copyWith(void Function(PercussionApiError) updates) => super.copyWith((message) => updates(message as PercussionApiError));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PercussionApiError create() => PercussionApiError._();
  PercussionApiError createEmptyInstance() => create();
  static $pb.PbList<PercussionApiError> createRepeated() => $pb.PbList<PercussionApiError>();
  @$core.pragma('dart2js:noInline')
  static PercussionApiError getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PercussionApiError>(create);
  static PercussionApiError _defaultInstance;

  @$pb.TagNumber(1)
  PercussionApiError_ErrorCode get errorCode => $_getN(0);
  @$pb.TagNumber(1)
  set errorCode(PercussionApiError_ErrorCode v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasErrorCode() => $_has(0);
  @$pb.TagNumber(1)
  void clearErrorCode() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get message => $_getSZ(1);
  @$pb.TagNumber(2)
  set message($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasMessage() => $_has(1);
  @$pb.TagNumber(2)
  void clearMessage() => clearField(2);
}

