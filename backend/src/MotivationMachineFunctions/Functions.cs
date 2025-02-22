using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.SystemTextJson;
using System.Text.Json.Serialization;
using Amazon.Lambda.Annotations;
using Amazon.Lambda.Annotations.APIGateway;
using MotivationMachineFunctions;

[assembly: LambdaGlobalProperties(GenerateMain = true)]
[assembly: LambdaSerializer(typeof(SourceGeneratorLambdaJsonSerializer<LambdaFunctionJsonSerializerContext>))]

namespace MotivationMachineFunctions;

public class Functions
{
    [LambdaFunction]
    [HttpApi(LambdaHttpMethod.Get, "/hello-world")]
    public string HelloWorld()
    {
        return "Hello World";
    }
}

[JsonSerializable(typeof(string))]
public partial class LambdaFunctionJsonSerializerContext : JsonSerializerContext
{
}