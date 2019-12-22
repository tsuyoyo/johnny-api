///
//  Generated code. Do not modify.
//  source: proto/userService.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'user.pb.dart' as $0;

class SignupUserRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('SignupUserRequest', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, 'token')
    ..hasRequiredFields = false
  ;

  SignupUserRequest._() : super();
  factory SignupUserRequest() => create();
  factory SignupUserRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignupUserRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  SignupUserRequest clone() => SignupUserRequest()..mergeFromMessage(this);
  SignupUserRequest copyWith(void Function(SignupUserRequest) updates) => super.copyWith((message) => updates(message as SignupUserRequest));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignupUserRequest create() => SignupUserRequest._();
  SignupUserRequest createEmptyInstance() => create();
  static $pb.PbList<SignupUserRequest> createRepeated() => $pb.PbList<SignupUserRequest>();
  @$core.pragma('dart2js:noInline')
  static SignupUserRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignupUserRequest>(create);
  static SignupUserRequest _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get token => $_getSZ(0);
  @$pb.TagNumber(1)
  set token($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);
}

class SignupUserResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('SignupUserResponse', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$0.User>(1, 'user', subBuilder: $0.User.create)
    ..hasRequiredFields = false
  ;

  SignupUserResponse._() : super();
  factory SignupUserResponse() => create();
  factory SignupUserResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignupUserResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  SignupUserResponse clone() => SignupUserResponse()..mergeFromMessage(this);
  SignupUserResponse copyWith(void Function(SignupUserResponse) updates) => super.copyWith((message) => updates(message as SignupUserResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignupUserResponse create() => SignupUserResponse._();
  SignupUserResponse createEmptyInstance() => create();
  static $pb.PbList<SignupUserResponse> createRepeated() => $pb.PbList<SignupUserResponse>();
  @$core.pragma('dart2js:noInline')
  static SignupUserResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignupUserResponse>(create);
  static SignupUserResponse _defaultInstance;

  @$pb.TagNumber(1)
  $0.User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user($0.User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  $0.User ensureUser() => $_ensure(0);
}

