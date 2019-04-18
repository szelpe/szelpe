$ErrorActionPreference = "Stop"

mkdir .\tmp
$files = Get-ChildItem .\Content | % { $_.Name }
$template = Get-Content .\index.src.html
foreach ($file in $files)
{
    $name = $file.Replace(".md", "")
    $htmlName = ".\tmp\" + $name + ".html"
    pandoc.exe -f markdown -t html .\Content\$file -o $htmlName
    $template = $template.Replace("{{" + $name + "}}", (Get-Content $htmlName))
}

Set-Content .\index.html -Value $template
Remove-Item -Recurse -Force .\tmp
