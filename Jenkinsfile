pipeline {
environment {
registry = "gits5622/likee_frontend"
registryCredential = 'docker-hub'
dockerImage = ''
}
agent any
stages {
stage('Cloning our Git') {
steps {
git 'https://github.com/gitx5622/likee_frontend.git'
}
}
stage('Building our image') {
steps{
script {
dockerImage = docker.build registry
}
}
}
stage('Deploy our image') {
steps{
script {
docker.withRegistry( '', registryCredential ) {
dockerImage.push()
}
}
}
}

}
}