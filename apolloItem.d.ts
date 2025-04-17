import * as pulumi from "@pulumi/pulumi";
/**
 * ApolloItem for apolloconfig
 */
export declare class ApolloItem extends pulumi.CustomResource {
    /**
     * Get an existing ApolloItem resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApolloItem;
    /**
     * Returns true if the given object is an instance of ApolloItem.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApolloItem;
    /**
     * The appId.
     */
    readonly appId: pulumi.Output<string>;
    /**
     * The clusterName.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * The comment.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The dataChangeCreatedBy.
     */
    readonly dataChangeCreatedBy: pulumi.Output<string | undefined>;
    /**
     * The dataChangeLastModifiedBy.
     */
    readonly dataChangeLastModifiedBy: pulumi.Output<string | undefined>;
    /**
     * The env.
     */
    readonly env: pulumi.Output<string>;
    /**
     * The key.
     */
    readonly key: pulumi.Output<string>;
    /**
     * The namespace.
     */
    readonly namespace: pulumi.Output<string>;
    /**
     * The operator for delete item.
     */
    readonly operator: pulumi.Output<string | undefined>;
    /**
     * The value.
     */
    readonly value: pulumi.Output<string | undefined>;
    /**
     * Create a ApolloItem resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApolloItemArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApolloItem resource.
 */
export interface ApolloItemArgs {
    /**
     * The appId.
     */
    appId: pulumi.Input<string>;
    /**
     * The clusterName.
     */
    clusterName: pulumi.Input<string>;
    /**
     * The comment.
     */
    comment?: pulumi.Input<string>;
    /**
     * The dataChangeCreatedBy.
     */
    dataChangeCreatedBy?: pulumi.Input<string>;
    /**
     * The dataChangeLastModifiedBy.
     */
    dataChangeLastModifiedBy?: pulumi.Input<string>;
    /**
     * The env.
     */
    env: pulumi.Input<string>;
    /**
     * The key.
     */
    key: pulumi.Input<string>;
    /**
     * The namespace.
     */
    namespace: pulumi.Input<string>;
    /**
     * The operator for delete item.
     */
    operator?: pulumi.Input<string>;
    /**
     * The value.
     */
    value: pulumi.Input<string>;
}
