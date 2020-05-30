///
//  Generated code. Do not modify.
//  source: proto/userService.proto
//
// @dart = 2.3
// ignore_for_file: camel_case_types,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'user.pb.dart' as $1;
import 'area.pb.dart' as $0;

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
    ..aOM<$1.User>(1, 'user', subBuilder: $1.User.create)
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
  $1.User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user($1.User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  $1.User ensureUser() => $_ensure(0);
}

class PostUserLoginRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PostUserLoginRequest', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, 'token')
    ..hasRequiredFields = false
  ;

  PostUserLoginRequest._() : super();
  factory PostUserLoginRequest() => create();
  factory PostUserLoginRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostUserLoginRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PostUserLoginRequest clone() => PostUserLoginRequest()..mergeFromMessage(this);
  PostUserLoginRequest copyWith(void Function(PostUserLoginRequest) updates) => super.copyWith((message) => updates(message as PostUserLoginRequest));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostUserLoginRequest create() => PostUserLoginRequest._();
  PostUserLoginRequest createEmptyInstance() => create();
  static $pb.PbList<PostUserLoginRequest> createRepeated() => $pb.PbList<PostUserLoginRequest>();
  @$core.pragma('dart2js:noInline')
  static PostUserLoginRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostUserLoginRequest>(create);
  static PostUserLoginRequest _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get token => $_getSZ(0);
  @$pb.TagNumber(1)
  set token($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);
}

class PostUserLoginResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PostUserLoginResponse', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$1.User>(1, 'user', subBuilder: $1.User.create)
    ..hasRequiredFields = false
  ;

  PostUserLoginResponse._() : super();
  factory PostUserLoginResponse() => create();
  factory PostUserLoginResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostUserLoginResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PostUserLoginResponse clone() => PostUserLoginResponse()..mergeFromMessage(this);
  PostUserLoginResponse copyWith(void Function(PostUserLoginResponse) updates) => super.copyWith((message) => updates(message as PostUserLoginResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostUserLoginResponse create() => PostUserLoginResponse._();
  PostUserLoginResponse createEmptyInstance() => create();
  static $pb.PbList<PostUserLoginResponse> createRepeated() => $pb.PbList<PostUserLoginResponse>();
  @$core.pragma('dart2js:noInline')
  static PostUserLoginResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostUserLoginResponse>(create);
  static PostUserLoginResponse _defaultInstance;

  @$pb.TagNumber(1)
  $1.User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user($1.User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  $1.User ensureUser() => $_ensure(0);
}

class GetUserProfileResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GetUserProfileResponse', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$1.User>(1, 'user', subBuilder: $1.User.create)
    ..aOM<$1.UserProfile>(2, 'userProfile', protoName: 'userProfile', subBuilder: $1.UserProfile.create)
    ..hasRequiredFields = false
  ;

  GetUserProfileResponse._() : super();
  factory GetUserProfileResponse() => create();
  factory GetUserProfileResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetUserProfileResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GetUserProfileResponse clone() => GetUserProfileResponse()..mergeFromMessage(this);
  GetUserProfileResponse copyWith(void Function(GetUserProfileResponse) updates) => super.copyWith((message) => updates(message as GetUserProfileResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetUserProfileResponse create() => GetUserProfileResponse._();
  GetUserProfileResponse createEmptyInstance() => create();
  static $pb.PbList<GetUserProfileResponse> createRepeated() => $pb.PbList<GetUserProfileResponse>();
  @$core.pragma('dart2js:noInline')
  static GetUserProfileResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetUserProfileResponse>(create);
  static GetUserProfileResponse _defaultInstance;

  @$pb.TagNumber(1)
  $1.User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user($1.User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  $1.User ensureUser() => $_ensure(0);

  @$pb.TagNumber(2)
  $1.UserProfile get userProfile => $_getN(1);
  @$pb.TagNumber(2)
  set userProfile($1.UserProfile v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasUserProfile() => $_has(1);
  @$pb.TagNumber(2)
  void clearUserProfile() => clearField(2);
  @$pb.TagNumber(2)
  $1.UserProfile ensureUserProfile() => $_ensure(1);
}

class PutUserProfileRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PutUserProfileRequest', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$1.User>(1, 'user', subBuilder: $1.User.create)
    ..aOM<$1.UserProfile>(2, 'userProfile', protoName: 'userProfile', subBuilder: $1.UserProfile.create)
    ..hasRequiredFields = false
  ;

  PutUserProfileRequest._() : super();
  factory PutUserProfileRequest() => create();
  factory PutUserProfileRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutUserProfileRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PutUserProfileRequest clone() => PutUserProfileRequest()..mergeFromMessage(this);
  PutUserProfileRequest copyWith(void Function(PutUserProfileRequest) updates) => super.copyWith((message) => updates(message as PutUserProfileRequest));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutUserProfileRequest create() => PutUserProfileRequest._();
  PutUserProfileRequest createEmptyInstance() => create();
  static $pb.PbList<PutUserProfileRequest> createRepeated() => $pb.PbList<PutUserProfileRequest>();
  @$core.pragma('dart2js:noInline')
  static PutUserProfileRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutUserProfileRequest>(create);
  static PutUserProfileRequest _defaultInstance;

  @$pb.TagNumber(1)
  $1.User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user($1.User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  $1.User ensureUser() => $_ensure(0);

  @$pb.TagNumber(2)
  $1.UserProfile get userProfile => $_getN(1);
  @$pb.TagNumber(2)
  set userProfile($1.UserProfile v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasUserProfile() => $_has(1);
  @$pb.TagNumber(2)
  void clearUserProfile() => clearField(2);
  @$pb.TagNumber(2)
  $1.UserProfile ensureUserProfile() => $_ensure(1);
}

class PutUserCityRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('PutUserCityRequest', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  PutUserCityRequest._() : super();
  factory PutUserCityRequest() => create();
  factory PutUserCityRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutUserCityRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  PutUserCityRequest clone() => PutUserCityRequest()..mergeFromMessage(this);
  PutUserCityRequest copyWith(void Function(PutUserCityRequest) updates) => super.copyWith((message) => updates(message as PutUserCityRequest));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutUserCityRequest create() => PutUserCityRequest._();
  PutUserCityRequest createEmptyInstance() => create();
  static $pb.PbList<PutUserCityRequest> createRepeated() => $pb.PbList<PutUserCityRequest>();
  @$core.pragma('dart2js:noInline')
  static PutUserCityRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutUserCityRequest>(create);
  static PutUserCityRequest _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

class GetUserCityResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo('GetUserCityResponse', package: const $pb.PackageName('pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  GetUserCityResponse._() : super();
  factory GetUserCityResponse() => create();
  factory GetUserCityResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetUserCityResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  GetUserCityResponse clone() => GetUserCityResponse()..mergeFromMessage(this);
  GetUserCityResponse copyWith(void Function(GetUserCityResponse) updates) => super.copyWith((message) => updates(message as GetUserCityResponse));
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetUserCityResponse create() => GetUserCityResponse._();
  GetUserCityResponse createEmptyInstance() => create();
  static $pb.PbList<GetUserCityResponse> createRepeated() => $pb.PbList<GetUserCityResponse>();
  @$core.pragma('dart2js:noInline')
  static GetUserCityResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetUserCityResponse>(create);
  static GetUserCityResponse _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

