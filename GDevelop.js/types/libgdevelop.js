// Automatically generated by GDevelop.js/scripts/generate-types.js
declare class libGDevelop {
  getPointer(gdEmscriptenObject): number;
  castObject<T>(gdEmscriptenObject, Class<T>): T;
  compare(gdEmscriptenObject, gdEmscriptenObject): boolean;

  getTypeOfObject(globalObjectsContainer: gdObjectsContainer, objectsContainer: gdObjectsContainer, objectName: string, searchInGroups: boolean): string;
  getTypeOfBehavior(globalObjectsContainer: gdObjectsContainer, objectsContainer: gdObjectsContainer, objectName: string, searchInGroups: boolean): string;
  getBehaviorsOfObject(globalObjectsContainer: gdObjectsContainer, objectsContainer: gdObjectsContainer, objectName: string, searchInGroups: boolean): gdVectorString;

  removeFromVectorParameterMetadata(gdVectorParameterMetadata, index: number): void;
  swapInVectorParameterMetadata(gdVectorParameterMetadata, oldIndex: number, newIndex: number): void;

  asStandardEvent(gdBaseEvent): gdStandardEvent;
  asRepeatEvent(gdBaseEvent): gdRepeatEvent;
  asWhileEvent(gdBaseEvent): gdWhileEvent;
  asForEachEvent(gdBaseEvent): gdForEachEvent;
  asForEachChildVariableEvent(gdBaseEvent): gdForEachChildVariableEvent;
  asCommentEvent(gdBaseEvent): gdCommentEvent;
  asGroupEvent(gdBaseEvent): gdGroupEvent;
  asLinkEvent(gdBaseEvent): gdLinkEvent;
  asJsCodeEvent(gdBaseEvent): gdJsCodeEvent;
  asPlatform(gdPlatform): gdPlatform;

  asSpriteConfiguration(gdObjectConfiguration): gdSpriteObject;
  asTiledSpriteConfiguration(gdObjectConfiguration): gdTiledSpriteObject;
  asPanelSpriteConfiguration(gdObjectConfiguration): gdPanelSpriteObject;
  asTextObjectConfiguration(gdObjectConfiguration): gdTextObject;
  asShapePainterConfiguration(gdObjectConfiguration): gdShapePainterObject;
  asAdMobConfiguration(gdObjectConfiguration): gdAdMobObject;
  asTextEntryConfiguration(gdObjectConfiguration): gdTextEntryObject;
  asParticleEmitterConfiguration(gdObjectConfiguration): gdParticleEmitterObject;
  asObjectJsImplementation(gdObjectConfiguration): gdObjectJsImplementation;
  asCustomObjectConfiguration(gdObjectConfiguration): gdCustomObjectConfiguration;

  asImageResource(gdResource): gdImageResource;

  VectorString: Class<gdVectorString>;
  VectorPlatformExtension: Class<gdVectorPlatformExtension>;
  VectorDependencyMetadata: Class<gdVectorDependencyMetadata>;
  VectorInt: Class<gdVectorInt>;
  VectorVariable: Class<gdVectorVariable>;
  MapStringString: Class<gdMapStringString>;
  MapStringBoolean: Class<gdMapStringBoolean>;
  MapStringDouble: Class<gdMapStringDouble>;
  MapStringVariable: Class<gdMapStringVariable>;
  MapStringExpressionMetadata: Class<gdMapStringExpressionMetadata>;
  MapStringInstructionMetadata: Class<gdMapStringInstructionMetadata>;
  MapStringEventMetadata: Class<gdMapStringEventMetadata>;
  MapExtensionProperties: Class<gdMapExtensionProperties>;
  SetString: Class<gdSetString>;
  ProjectHelper: Class<gdProjectHelper>;
  EventsVariablesFinder: Class<gdEventsVariablesFinder>;
  EventsIdentifiersFinder: Class<gdEventsIdentifiersFinder>;
  InstructionOrExpressionGroupMetadata: Class<gdInstructionOrExpressionGroupMetadata>;
  VersionWrapper: Class<gdVersionWrapper>;
  Platform: Class<gdPlatform>;
  JsPlatform: Class<gdJsPlatform>;
  PairStringVariable: Class<gdPairStringVariable>;
  Variable_Type: Class<Variable_Type>;
  Variable: Class<gdVariable>;
  VariablesContainer: Class<gdVariablesContainer>;
  ObjectGroup: Class<gdObjectGroup>;
  ObjectGroupsContainer: Class<gdObjectGroupsContainer>;
  PlatformSpecificAssets: Class<gdPlatformSpecificAssets>;
  LoadingScreen: Class<gdLoadingScreen>;
  Watermark: Class<gdWatermark>;
  ObjectsContainer: Class<gdObjectsContainer>;
  Project: Class<gdProject>;
  ExtensionProperties: Class<gdExtensionProperties>;
  Behavior: Class<gdBehavior>;
  BehaviorJsImplementation: Class<gdBehaviorJsImplementation>;
  BehaviorsSharedData: Class<gdBehaviorsSharedData>;
  BehaviorSharedDataJsImplementation: Class<gdBehaviorSharedDataJsImplementation>;
  ObjectConfiguration: Class<gdObjectConfiguration>;
  UniquePtrObjectConfiguration: Class<gdUniquePtrObjectConfiguration>;
  gdObject: Class<gdObject>;
  UniquePtrObject: Class<gdUniquePtrObject>;
  ObjectJsImplementation: Class<gdObjectJsImplementation>;
  CustomObjectConfiguration: Class<gdCustomObjectConfiguration>;
  Layout: Class<gdLayout>;
  ExternalEvents: Class<gdExternalEvents>;
  ExternalLayout: Class<gdExternalLayout>;
  Effect: Class<gdEffect>;
  EffectsContainer: Class<gdEffectsContainer>;
  Layer: Class<gdLayer>;
  PropertyDescriptor: Class<gdPropertyDescriptor>;
  MeasurementUnit: Class<gdMeasurementUnit>;
  MeasurementBaseUnit: Class<gdMeasurementBaseUnit>;
  NamedPropertyDescriptor: Class<gdNamedPropertyDescriptor>;
  MapStringPropertyDescriptor: Class<gdMapStringPropertyDescriptor>;
  MapStringSerializerValue: Class<gdMapStringSerializerValue>;
  VectorPairStringSharedPtrSerializerElement: Class<gdVectorPairStringSharedPtrSerializerElement>;
  Resource: Class<gdResource>;
  ResourcesManager: Class<gdResourcesManager>;
  ImageResource: Class<gdImageResource>;
  AudioResource: Class<gdAudioResource>;
  FontResource: Class<gdFontResource>;
  BitmapFontResource: Class<gdBitmapFontResource>;
  VideoResource: Class<gdVideoResource>;
  JsonResource: Class<gdJsonResource>;
  TilemapResource: Class<gdTilemapResource>;
  TilesetResource: Class<gdTilesetResource>;
  InitialInstance: Class<gdInitialInstance>;
  InitialInstancesContainer: Class<gdInitialInstancesContainer>;
  HighestZOrderFinder: Class<gdHighestZOrderFinder>;
  InitialInstanceFunctor: Class<gdInitialInstanceFunctor>;
  InitialInstanceJSFunctorWrapper: Class<gdInitialInstanceJSFunctorWrapper>;
  InitialInstanceJSFunctor: Class<gdInitialInstanceJSFunctor>;
  SerializerValue: Class<gdSerializerValue>;
  SerializerElement: Class<gdSerializerElement>;
  SharedPtrSerializerElement: Class<gdSharedPtrSerializerElement>;
  Serializer: Class<gdSerializer>;
  InstructionsList: Class<gdInstructionsList>;
  Instruction: Class<gdInstruction>;
  Expression: Class<gdExpression>;
  VectorPairStringTextFormatting: Class<gdVectorPairStringTextFormatting>;
  TextFormatting: Class<gdTextFormatting>;
  InstructionSentenceFormatter: Class<gdInstructionSentenceFormatter>;
  ExtraInformation: Class<gdExtraInformation>;
  ExpressionCodeGenerationInformation: Class<gdExpressionCodeGenerationInformation>;
  ParameterOptions: Class<gdParameterOptions>;
  InstructionMetadata: Class<gdInstructionMetadata>;
  ExpressionMetadata: Class<gdExpressionMetadata>;
  MultipleInstructionMetadata: Class<gdMultipleInstructionMetadata>;
  DependencyMetadata: Class<gdDependencyMetadata>;
  ParameterMetadata: Class<gdParameterMetadata>;
  ValueTypeMetadata: Class<gdValueTypeMetadata>;
  VectorParameterMetadata: Class<gdVectorParameterMetadata>;
  ParameterMetadataTools: Class<gdParameterMetadataTools>;
  EventsFunctionTools: Class<gdEventsFunctionTools>;
  ObjectMetadata: Class<gdObjectMetadata>;
  BehaviorMetadata: Class<gdBehaviorMetadata>;
  EffectMetadata: Class<gdEffectMetadata>;
  EventMetadata: Class<gdEventMetadata>;
  PlatformExtension: Class<gdPlatformExtension>;
  EventsList: Class<gdEventsList>;
  BaseEvent: Class<gdBaseEvent>;
  StandardEvent: Class<gdStandardEvent>;
  RepeatEvent: Class<gdRepeatEvent>;
  WhileEvent: Class<gdWhileEvent>;
  ForEachEvent: Class<gdForEachEvent>;
  ForEachChildVariableEvent: Class<gdForEachChildVariableEvent>;
  CommentEvent: Class<gdCommentEvent>;
  GroupEvent: Class<gdGroupEvent>;
  LinkEvent: Class<gdLinkEvent>;
  EventsRemover: Class<gdEventsRemover>;
  EventsListUnfolder: Class<gdEventsListUnfolder>;
  EventsSearchResult: Class<gdEventsSearchResult>;
  VectorEventsSearchResult: Class<gdVectorEventsSearchResult>;
  EventsRefactorer: Class<gdEventsRefactorer>;
  UnfilledRequiredBehaviorPropertyProblem: Class<gdUnfilledRequiredBehaviorPropertyProblem>;
  VectorUnfilledRequiredBehaviorPropertyProblem: Class<gdVectorUnfilledRequiredBehaviorPropertyProblem>;
  ProjectBrowserHelper: Class<gdProjectBrowserHelper>;
  WholeProjectRefactorer: Class<gdWholeProjectRefactorer>;
  PropertyFunctionGenerator: Class<gdPropertyFunctionGenerator>;
  UsedExtensionsResult: Class<gdUsedExtensionsResult>;
  UsedExtensionsFinder: Class<gdUsedExtensionsFinder>;
  InstructionsCountEvaluator: Class<gdInstructionsCountEvaluator>;
  ExtensionAndBehaviorMetadata: Class<gdExtensionAndBehaviorMetadata>;
  ExtensionAndObjectMetadata: Class<gdExtensionAndObjectMetadata>;
  ExtensionAndEffectMetadata: Class<gdExtensionAndEffectMetadata>;
  ExtensionAndInstructionMetadata: Class<gdExtensionAndInstructionMetadata>;
  ExtensionAndExpressionMetadata: Class<gdExtensionAndExpressionMetadata>;
  MetadataProvider: Class<gdMetadataProvider>;
  ExpressionParserDiagnostic: Class<gdExpressionParserDiagnostic>;
  VectorExpressionParserDiagnostic: Class<gdVectorExpressionParserDiagnostic>;
  ExpressionParser2NodeWorker: Class<gdExpressionParser2NodeWorker>;
  ExpressionValidator: Class<gdExpressionValidator>;
  ExpressionCompletionDescription_CompletionKind: Class<ExpressionCompletionDescription_CompletionKind>;
  ExpressionCompletionDescription: Class<gdExpressionCompletionDescription>;
  VectorExpressionCompletionDescription: Class<gdVectorExpressionCompletionDescription>;
  ExpressionCompletionFinder: Class<gdExpressionCompletionFinder>;
  ExpressionNodeLocationFinder: Class<gdExpressionNodeLocationFinder>;
  ExpressionTypeFinder: Class<gdExpressionTypeFinder>;
  ExpressionNode: Class<gdExpressionNode>;
  UniquePtrExpressionNode: Class<gdUniquePtrExpressionNode>;
  ExpressionParser2: Class<gdExpressionParser2>;
  EventsFunction_FunctionType: Class<EventsFunction_FunctionType>;
  EventsFunction: Class<gdEventsFunction>;
  EventsFunctionsContainer: Class<gdEventsFunctionsContainer>;
  AbstractEventsBasedEntity: Class<gdAbstractEventsBasedEntity>;
  EventsBasedBehavior: Class<gdEventsBasedBehavior>;
  EventsBasedBehaviorsList: Class<gdEventsBasedBehaviorsList>;
  EventsBasedObject: Class<gdEventsBasedObject>;
  EventsBasedObjectsList: Class<gdEventsBasedObjectsList>;
  NamedPropertyDescriptorsList: Class<gdNamedPropertyDescriptorsList>;
  EventsFunctionsExtension: Class<gdEventsFunctionsExtension>;
  AbstractFileSystem: Class<gdAbstractFileSystem>;
  AbstractFileSystemJS: Class<gdAbstractFileSystemJS>;
  ProjectResourcesAdder: Class<gdProjectResourcesAdder>;
  ArbitraryEventsWorker: Class<gdArbitraryEventsWorker>;
  EventsLeaderboardsLister: Class<gdEventsLeaderboardsLister>;
  EventsLeaderboardsRenamer: Class<gdEventsLeaderboardsRenamer>;
  EventsParametersLister: Class<gdEventsParametersLister>;
  EventsPositionFinder: Class<gdEventsPositionFinder>;
  EventsTypesLister: Class<gdEventsTypesLister>;
  InstructionsTypeRenamer: Class<gdInstructionsTypeRenamer>;
  EventsContext: Class<gdEventsContext>;
  EventsContextAnalyzer: Class<gdEventsContextAnalyzer>;
  ArbitraryResourceWorker: Class<gdArbitraryResourceWorker>;
  ArbitraryResourceWorkerJS: Class<gdArbitraryResourceWorkerJS>;
  ResourcesMergingHelper: Class<gdResourcesMergingHelper>;
  ResourcesRenamer: Class<gdResourcesRenamer>;
  ProjectResourcesCopier: Class<gdProjectResourcesCopier>;
  ResourcesInUseHelper: Class<gdResourcesInUseHelper>;
  EditorSettings: Class<gdEditorSettings>;
  Point: Class<gdPoint>;
  VectorPoint: Class<gdVectorPoint>;
  Polygon2d: Class<gdPolygon2d>;
  VectorPolygon2d: Class<gdVectorPolygon2d>;
  Sprite: Class<gdSprite>;
  Direction: Class<gdDirection>;
  Animation: Class<gdAnimation>;
  SpriteObject: Class<gdSpriteObject>;
  Vector2f: Class<gdVector2f>;
  VectorVector2f: Class<gdVectorVector2f>;
  TextObject: Class<gdTextObject>;
  TiledSpriteObject: Class<gdTiledSpriteObject>;
  PanelSpriteObject: Class<gdPanelSpriteObject>;
  ShapePainterObject: Class<gdShapePainterObject>;
  TextEntryObject: Class<gdTextEntryObject>;
  ParticleEmitterObject_RendererType: Class<ParticleEmitterObject_RendererType>;
  ParticleEmitterObject: Class<gdParticleEmitterObject>;
  LayoutCodeGenerator: Class<gdLayoutCodeGenerator>;
  BehaviorCodeGenerator: Class<gdBehaviorCodeGenerator>;
  ObjectCodeGenerator: Class<gdObjectCodeGenerator>;
  EventsFunctionsExtensionCodeGenerator: Class<gdEventsFunctionsExtensionCodeGenerator>;
  PreviewExportOptions: Class<gdPreviewExportOptions>;
  ExportOptions: Class<gdExportOptions>;
  Exporter: Class<gdExporter>;
  JsCodeEvent: Class<gdJsCodeEvent>;
};